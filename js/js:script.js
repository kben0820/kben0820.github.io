const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const gallery = document.querySelector('.gallery');

const captions = Array.from(document.querySelectorAll('.caption-text'));
let currentIndex = 0;


function displayImage(index) {
  const images = gallery.querySelectorAll('img');
  images.forEach((image, i) => {
    if (i === index) {
      image.style.display = 'block';
    } else {
      image.style.display = 'none';
    }
  });
  captions.forEach((caption, i) => {
    if (i === index) {
      caption.style.display = 'block';
    } else {
      caption.style.display = 'none';
    }
  });
}

displayImage(currentIndex);

prevButton.addEventListener('click', function() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  displayImage(currentIndex);
});

nextButton.addEventListener('click', function() {
  currentIndex = (currentIndex + 1) % images.length;
  displayImage(currentIndex);
});


const button = document.querySelector('button');


button.addEventListener('mouseover', () => {
  
  button.style.backgroundColor = 'pink';
});


button.addEventListener('mouseout', () => {
  
  button.style.backgroundColor = '';
});



nextButton.addEventListener('mouseover', () => {
  
  nextButton.style.backgroundColor = 'pink';
});

nextButton.addEventListener('mouseout', () => {
  
  nextButton.style.backgroundColor = '';
});