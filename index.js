document.addEventListener('DOMContentLoaded', () => {
  const TEST_ORIGIN = 'http://localhost:3000';

  if (window.location.origin === TEST_ORIGIN) {
    document.body.setAttribute('yandex', '');
    const img = document.createElement('img');
    img.src = './images/layout.jpg';
    document.body.appendChild(img);
    document.querySelectorAll('body *:not(img):not(script)').forEach((el) => {
      el.style.display = 'none';
    });
  }
});
