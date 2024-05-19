document.getElementById('processButton').addEventListener('click', () => {
    const imageUpload = document.getElementById('imageUpload').files[0];
    if (imageUpload) {
        Tesseract.recognize(
            imageUpload,
            'mar',
            {
                logger: m => console.log(m)
            }
        ).then(({ data: { text } }) => {
            document.getElementById('result').innerText = text;
        }).catch(err => {
            console.error(err);
            alert('Error processing the image.');
        });
    } else {
        alert('Please upload an image first.');
    }
});

document.getElementById('resetButton').addEventListener('click', () => {
    document.getElementById('imageUpload').value = '';
    document.getElementById('result').innerText = '';
});

document.getElementById('copyButton').addEventListener('click', () => {
    const resultText = document.getElementById('result').innerText;
    if (resultText) {
        navigator.clipboard.writeText(resultText)
            .then(() => {
                alert('Text copied to clipboard!');
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
                alert('Failed to copy text. Please try again.');
            });
    } else {
        alert('No text to copy.');
    }
});


