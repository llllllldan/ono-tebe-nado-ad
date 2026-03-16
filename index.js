document.addEventListener('DOMContentLoaded', () => {
  const TEST_ORIGIN = 'http://localhost:3000';

  if (window.location.origin === TEST_ORIGIN) {
    document.body.setAttribute('yandex', '');
    document.body.innerHTML = "<img src='./images/layout.jpg'  alt='' />";
  }
});
