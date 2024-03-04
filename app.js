document.addEventListener('DOMContentLoaded', function () {
  const canvas = document.getElementById('signatureCanvas');
  const context = canvas.getContext('2d');
  let isDrawing = false;

  canvas.addEventListener('mousedown', startDrawing);
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup', stopDrawing);
  canvas.addEventListener('mouseout', stopDrawing);

  const clearButton = document.getElementById('clearBtn');
  clearButton.addEventListener('click', clearCanvas);

  const saveButton = document.getElementById('saveBtn');
  saveButton.addEventListener('click', saveSignature);

  function startDrawing(e) {
      isDrawing = true;
      draw(e);
  }

  function draw(e) {
      if (!isDrawing) return;

      context.lineWidth = 2;
      context.lineCap = 'round';
      context.strokeStyle = '#000';

      context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
      context.stroke();
      context.beginPath();
      context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
  }

  function stopDrawing() {
      isDrawing = false;
      context.beginPath();
  }

  function clearCanvas() {
      context.clearRect(0, 0, canvas.width, canvas.height);
  }

  function saveSignature() {
      const dataURL = canvas.toDataURL();
      // You can navigate to the display page or save the dataURL as needed
      window.location.href = 'displaySign.html?dataURL=' + encodeURIComponent(dataURL);
  }

});
