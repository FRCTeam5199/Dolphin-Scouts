document.getElementById('test').addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = new FormData(this);

  fetch('https://script.google.com/macros/s/AKfycbxt1D8dsVHb38XJOSgvDD_35tDuXyBsOM2fIL65CSZZ7PCs1DRC5rGeGRy3wxEoNcnw/exec', {
      method: 'POST',
      body: formData
  }).then(response => response.text()).then(data => {
      console.log(data);
      alert('Form submitted successfully!');
      // Change later to selectively reset form
      this.reset();
  }).catch(error => {
      console.error('Error:', error);
      alert('An error occurred during submission.');
  });
});