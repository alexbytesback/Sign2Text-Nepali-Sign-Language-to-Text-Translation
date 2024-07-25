import mediapipe as mp
import cv2
import numpy as np

def draw_landmarks(image, results):
    """
    Draw the landmarks on the image.

    Args:
        image (numpy.ndarray): The input image.
        results: The landmarks detected by Mediapipe.

    Returns:
        None
    """
    # Create a writable copy of the image
    writable_image = image.copy()

    # Draw landmarks for left hand
    if results.left_hand_landmarks:
        mp.solutions.drawing_utils.draw_landmarks(
            writable_image, results.left_hand_landmarks, mp.solutions.holistic.HAND_CONNECTIONS)

    # Draw landmarks for right hand
    if results.right_hand_landmarks:
        mp.solutions.drawing_utils.draw_landmarks(
            writable_image, results.right_hand_landmarks, mp.solutions.holistic.HAND_CONNECTIONS)

    # Return the modified image
    return writable_image

def image_process(image, model):
    """
    Process the image and obtain sign landmarks.

    Args:
        image (numpy.ndarray): The input image.
        model: The Mediapipe holistic object.

    Returns:
        results: The processed results containing sign landmarks.
    """
    image.flags.writeable = False  # Make the image non-writable before processing
    image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    results = model.process(image)
    image.flags.writeable = True  # Make the image writable again after processing
    image = cv2.cvtColor(image, cv2.COLOR_RGB2BGR)
    return results

def keypoint_extraction(results):
    """
    Extract the keypoints from the sign landmarks.

    Args:
        results: The processed results containing sign landmarks.

    Returns:
        keypoints (numpy.ndarray): The extracted keypoints.
    """
    # Extract the keypoints for the left hand if present, otherwise set to zeros
    lh = np.array([[res.x, res.y, res.z] for res in results.left_hand_landmarks.landmark]).flatten() if results.left_hand_landmarks else np.zeros(63)
    # Extract the keypoints for the right hand if present, otherwise set to zeros
    rh = np.array([[res.x, res.y, res.z] for res in results.right_hand_landmarks.landmark]).flatten() if results.right_hand_landmarks else np.zeros(63)
    # Concatenate the keypoints for both hands
    keypoints = np.concatenate([lh, rh])
    return keypoints