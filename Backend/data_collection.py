import os
import numpy as np
import cv2
import mediapipe as mp
import keyboard
from itertools import product
from my_functions import keypoint_extraction, draw_landmarks, image_process
from PIL import ImageFont, ImageDraw, Image

actions = np.array(['सबैजना', 'हामी', 'टीम'])
sequences = 30
frames = 10
PATH = os.path.join('data')

font_path = "NotoSansDevanagari-Regular.ttf"
font = ImageFont.truetype(font_path, 24)

for action, sequence in product(actions, range(sequences)):
    try:
        os.makedirs(os.path.join(PATH, action, str(sequence)))
    except FileExistsError:
        pass

cap = cv2.VideoCapture(0)
if not cap.isOpened():
    print("Cannot access camera.")
    exit()

def draw_text(image, text, position, font, color=(255, 0, 0)):
    pil_image = Image.fromarray(cv2.cvtColor(image, cv2.COLOR_BGR2RGB))
    draw = ImageDraw.Draw(pil_image)
    draw.text(position, text, font=font, fill=color)
    return cv2.cvtColor(np.array(pil_image), cv2.COLOR_RGB2BGR)

with mp.solutions.holistic.Holistic(min_detection_confidence=0.75, min_tracking_confidence=0.75) as holistic:
    for action, sequence in product(actions, range(sequences)):
        for frame in range(frames):
            while True:
                if keyboard.is_pressed(' '):
                    break
                _, image = cap.read()
                image = cv2.flip(image, 1)
                results = image_process(image, holistic)
                writable_image = draw_landmarks(image, results)
                writable_image = draw_text(writable_image, f'Recording data for "{action}", Sequence {sequence}', (20, 20), font)
                writable_image = draw_text(writable_image, 'Press "Space" to start recording', (20, 450), font)
                cv2.imshow('Camera', writable_image)
                if cv2.waitKey(1) & 0xFF == 27:
                    break

            _, image = cap.read()
            image = cv2.flip(image, 1)
            results = image_process(image, holistic)
            writable_image = draw_landmarks(image, results)
            writable_image = draw_text(writable_image, f'Recording data for "{action}", Sequence {sequence}', (20, 20), font)
            cv2.imshow('Camera', writable_image)
            cv2.waitKey(1)

            keypoints = keypoint_extraction(results)
            frame_path = os.path.join(PATH, action, str(sequence), str(frame))
            np.save(frame_path, keypoints)

cap.release()
cv2.destroyAllWindows()
