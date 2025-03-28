  document.addEventListener('DOMContentLoaded', function () {
    // Ваш код, який працює з DOM
    const phoneInput = document.getElementById('phone');
  
    phoneInput.addEventListener('input', function (e) {
      let value = e.target.value.replace(/\D/g, '');
      if (!value.startsWith('38')) {
        value = '38' + value;
      }
      let formattedValue = '+38';
  
      if (value.length > 2) {
        formattedValue += ' ' + value.slice(2, 5);
      }
      if (value.length > 5) {
        formattedValue += ' ' + value.slice(5, 7);
      }
      if (value.length > 7) {
        formattedValue += ' ' + value.slice(7, 9);
      }
      if (value.length > 9) {
        formattedValue += ' ' + value.slice(9, 12);
      }
  
      e.target.value = formattedValue;
    });
  });


