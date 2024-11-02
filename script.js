document.getElementById('openButton').addEventListener('click', function() {
    const url = document.getElementById('urlInput').value;

    if (url) {
        let count = 0;
        const openTabs = () => {
            if (count < 50) {
                window.open(url, '_blank');
                count++;
                setTimeout(openTabs, 500); // Adjust the delay as needed
            }
        };
        openTabs();
    } else {
        alert('Please enter a valid URL.');
    }
});
