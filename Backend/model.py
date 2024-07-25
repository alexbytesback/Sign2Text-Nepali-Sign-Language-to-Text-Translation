import numpy as np
import os
from sklearn.model_selection import train_test_split
from tensorflow.keras.utils import to_categorical
from itertools import product
from sklearn import metrics
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense, Dropout, Input
from tensorflow.keras.callbacks import EarlyStopping, ModelCheckpoint

# Define data path and actions
PATH = os.path.join('data')
actions = np.array(os.listdir(PATH))

# Number of sequences and frames
sequences = 30
frames = 10

# Map labels to numbers
label_map = {label: num for num, label in enumerate(actions)}

# Collect data and labels
landmarks, labels = [], []

for action, sequence in product(actions, range(sequences)):
    temp = []
    for frame in range(frames):
        npy = np.load(os.path.join(PATH, action, str(sequence), str(frame) + '.npy'))
        temp.append(npy)
    landmarks.append(temp)
    labels.append(label_map[action])

# Convert to numpy arrays
X, Y = np.array(landmarks), to_categorical(labels).astype(int)

# Split data into training and testing sets
X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.10, random_state=34, stratify=Y)

# Build the model
model = Sequential()
model.add(Input(shape=(frames, 126)))  # Use Input layer to define the input shape
model.add(LSTM(64, return_sequences=True, activation='relu'))
model.add(Dropout(0.2))
model.add(LSTM(128, return_sequences=True, activation='relu'))
model.add(Dropout(0.2))
model.add(LSTM(64, return_sequences=False, activation='relu'))
model.add(Dense(64, activation='relu'))
model.add(Dense(actions.shape[0], activation='softmax'))

# Compile the model
model.compile(optimizer='Adam', loss='categorical_crossentropy', metrics=['categorical_accuracy'])

# Set up callbacks for early stopping and model checkpointing
early_stopping = EarlyStopping(monitor='val_loss', patience=10, restore_best_weights=True)
model_checkpoint = ModelCheckpoint('best_model.keras', monitor='val_loss', save_best_only=True)

# Train the model
model.fit(X_train, Y_train, epochs=100, validation_data=(X_test, Y_test), callbacks=[early_stopping, model_checkpoint])

# Save the model
model.save('my_model.keras')

# Evaluate the model on the test data
predictions = np.argmax(model.predict(X_test), axis=1)
test_labels = np.argmax(Y_test, axis=1)

# Calculate and print the test accuracy
accuracy = metrics.accuracy_score(test_labels, predictions)
print(f'Test Accuracy: {accuracy}')