document.getElementById('openButton').addEventListener('click', function() {
    const url = document.getElementById('urlInput').value;

    if (url) {
        for (let i = 0; i < 50; i++) {
            window.open(url, '_blank');
        }
    } else {
        alert('Please enter a valid URL.');
    }
});
