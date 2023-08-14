let offset = 0;
const sliderLine = document.querySelector('.slider-line');
const sliderCount = document.querySelector('.slider-count');

document.querySelector('.slider-next').addEventListener('click', function () {
  offset = offset + 770;
  if (offset > 770) {
    offset = 0;
  }
  sliderLine.style.left = -offset + 'px';

  if (offset === 0) {
    sliderCount.innerHTML = '01';
  } else if (offset === 770) {
    sliderCount.innerHTML = '02';
  }
});

document.querySelector('.slider-prev').addEventListener('click', function () {
  offset = offset - 770;
  if (offset < 0) {
    offset = 770;
  }
  sliderLine.style.left = -offset + 'px';

  if (offset === 0) {
    sliderCount.innerHTML = '01';
  } else if (offset === 770) {
    sliderCount.innerHTML = '02';
  }
});
