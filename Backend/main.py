import numpy as np
import os
import mediapipe as mp
import cv2
from my_functions import keypoint_extraction, draw_landmarks
import keyboard
from tensorflow.keras.models import load_model
from PIL import ImageFont, ImageDraw, Image
import time

font_path = "NotoSansDevanagari-Regular.ttf"
font = ImageFont.truetype(font_path, 36)

PATH = os.path.join('data')
actions = np.array(os.listdir(PATH))

model = load_model('best_model.keras')

sentence, keypoints, last_prediction = [], [], None
last_prediction_time = time.time()

cap = cv2.VideoCapture(0)
if not cap.isOpened():
    print("Cannot access camera.")
    exit()

mp_holistic = mp.solutions.holistic
mp_drawing = mp.solutions.drawing_utils

with mp_holistic.Holistic(min_detection_confidence=0.75, min_tracking_confidence=0.75) as holistic:
    def draw_text(image, text, position, font, color=(255, 255, 255)):
        pil_image = Image.fromarray(cv2.cvtColor(image, cv2.COLOR_BGR2RGB))
        draw = ImageDraw.Draw(pil_image)
        draw.text(position, text, font=font, fill=color)
        return cv2.cvtColor(np.array(pil_image), cv2.COLOR_RGB2BGR)

    while cap.isOpened():
        _, image = cap.read()
        image = cv2.flip(image, 1)
        image.flags.writeable = False
        results = holistic.process(cv2.cvtColor(image, cv2.COLOR_BGR2RGB))
        image.flags.writeable = True

        if results.right_hand_landmarks:
            mp_drawing.draw_landmarks(image, results.right_hand_landmarks, mp_holistic.HAND_CONNECTIONS)
        if results.left_hand_landmarks:
            mp_drawing.draw_landmarks(image, results.left_hand_landmarks, mp_holistic.HAND_CONNECTIONS)

        keypoints.append(keypoint_extraction(results))

        if len(keypoints) == 10:
            keypoints = np.array(keypoints)
            prediction = model.predict(keypoints[np.newaxis, :, :])
            keypoints = []

            if np.amax(prediction) > 0.9 and (time.time() - last_prediction_time) > 3:
                predicted_action = actions[np.argmax(prediction)]
                if predicted_action != last_prediction:
                    sentence.append(predicted_action)
                    last_prediction = predicted_action
                    last_prediction_time = time.time()

        if keyboard.is_pressed(' '):
            sentence, keypoints, last_prediction = [], [], None

        pil_image = Image.fromarray(cv2.cvtColor(image, cv2.COLOR_BGR2RGB))
        draw = ImageDraw.Draw(pil_image)
        title_text = "Sign2Text: Nepali Sign Language to Text Translator"
        bbox = draw.textbbox((0, 0), title_text, font=font)
        text_width = bbox[2] - bbox[0]
        image_height, image_width, _ = image.shape
        title_position = ((image_width - text_width) // 2, 20)
        image = draw_text(image, title_text, title_position, font)

        if sentence:
            sentence[0] = sentence[0].capitalize()
            image = draw_text(image, "Translation: " + ' '.join(sentence), (20, 470), font)
        else:
            image = draw_text(image, "Translation: ", (20, 470), font)

        cv2.imshow('Camera', image)

        if cv2.getWindowProperty('Camera', cv2.WND_PROP_VISIBLE) < 1:
            break

        cv2.waitKey(1)

    cap.release()
    cv2.destroyAllWindows()