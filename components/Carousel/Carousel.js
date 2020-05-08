/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

function carouselMaker(images){
  const {firstImg, secondImg, thirdImg, fourthImg} = images

  // creating elements
  const carousel = document.createElement('div');
  const leftButton = document.createElement('div');
  const img1 = document.createElement('img');
  const img2 = document.createElement('img');
  const img3 = document.createElement('img');
  const img4 = document.createElement('img');
  const rightButton = document.createElement('div');

  // adding classes
  carousel.classList.add('carousel');
  leftButton.classList.add('left-button');
  rightButton.classList.add('right-button');

  // adding content
  img1.src = firstImg;
  img2.src = secondImg;
  img3.src = thirdImg;
  img4.src = fourthImg;

  // composing content
  carousel.appendChild(leftButton);
  carousel.appendChild(img1);
  carousel.appendChild(img2);
  carousel.appendChild(img3);
  carousel.appendChild(img4);
  carousel.appendChild(rightButton);

  return carousel;
}

const imgObj = {
  firstImg: '../assets/carousel/mountains.jpeg',
  secondImg: '../assets/carousel/computer.jpeg',
  thirdImg: './assets/carousel/trees.jpeg',
  fourthImg: '../assets/carousel/turntable.jpeg'
}


const newCarousel = carouselMaker(imgObj)
const carouselBox = document.querySelector('.carousel-container');
carouselBox.appendChild(newCarousel)
/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
