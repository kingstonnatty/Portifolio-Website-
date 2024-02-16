const sendMailBtn = document.getElementById('sendMailBtn');

sendMailBtn.addEventListener('click', function(event) {
  event.preventDefault(); 
  window.location.href = 'mailto:kingstonnatty@gmail.com';
});

