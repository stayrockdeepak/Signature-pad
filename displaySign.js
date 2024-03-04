document.addEventListener('DOMContentLoaded', function () {
    const signatureImage = document.getElementById('signatureImage');

    // Retrieve the saved signature dataURL from the query parameter
    const params = new URLSearchParams(window.location.search);
    const savedSignatureDataURL = params.get('dataURL');

    displaySavedSignature(savedSignatureDataURL);

    function displaySavedSignature(dataURL) {
        signatureImage.src = dataURL;
    }
});