const sendPredictionRequest = async (inputData) => {
    try {
        const response = await fetch('http://127.0.0.1:5000/api/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ input: inputData }),
        });

        const result = await response.json();
        if (response.ok) {
            console.log('Prediction:', result.prediction);
        } else {
            console.error('Error:', result.error);
        }
    } catch (error) {
        console.error('Request failed:', error);
    }
};
