from flask import Flask, request
import os
import platform
import subprocess
import logging

app = Flask(__name__)
logging.basicConfig(level=logging.DEBUG)

@app.route('/bring_to_front', methods=['POST'])
def bring_to_front():
    app.logger.info('Received request to bring window to front')
    try:
        if platform.system() == "Windows":
            subprocess.run(['powershell', '-command', '(New-Object -ComObject WScript.Shell).AppActivate("Camera")'], check=True)
        elif platform.system() == "Darwin":
            subprocess.run(['osascript', '-e', 'tell application "Python" to activate'], check=True)
        elif platform.system() == "Linux":
            subprocess.run(['wmctrl', '-a', 'Camera'], check=True)
        return "OK", 200
    except subprocess.CalledProcessError as e:
        app.logger.error(f"Error bringing window to front: {e}")
        return "Error", 500

if __name__ == "__main__":
    app.run(debug=True)
