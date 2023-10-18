document.addEventListener('DOMContentLoaded', function () {
  let image = document.getElementById('image');
  let date = new Date().getDay();
  let string = `images/image1.jpg`;
  image.src = string;

  let randomtext = '';
  let hour = new Date().getHours();

  if (hour < 12) {
      randomtext = 'Good Morning';
  } else if (hour >= 12 && hour <= 18) {
      randomtext = 'Good Afternoon';
  } else {
      randomtext = 'Good Evening';
  }

  let para = document.getElementById('text');
  para.textContent = randomtext;

  const randomCssClass = ['red', 'blue', 'green', 'yellow'][Math.floor(Math.random() * 4)];
  document.body.classList.add(randomCssClass);
});
