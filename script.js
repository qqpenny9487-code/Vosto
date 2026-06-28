const modalBoxes = document.querySelectorAll('.modal-box');
modalBoxes.forEach(function(modalBox) {
  const modalContent = modalBox.querySelector('.modal-content');
  if (modalContent) {
    modalBox.addEventListener('click', function() {
      window.location.href = '#x';
    });
    modalContent.addEventListener('click', function(event) {
      event.stopPropagation();
    });
  }
});
