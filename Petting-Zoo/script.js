console.log("Hello");


// When someone click on "the button",

const myGoatButton = document.getElementById('buttonBabyGoat');
console.log(myGoatButton);


myGoatButton.addEventListener('click', (e) => {});


myGoatButton.addEventListener('click', (e) => {
  alert("meh");
});

const myBunnyButton = document.getElementById('buttonBunny');
const myBunnyStatus = document.getElementById('bunnyStatus');
console.log(myBunnyStatus);

myBunnyButton.addEventListener('click', (e) => {
  // change the text of myBunnyStatus
  // the content of myBunnyStatus will become "..."
  myBunnyStatus.innerHTML = 'w3schools rocks!!';
});


const mamaGoatButton = document.getElementById('buttonMamaGoat');
//const mamaGoatButton = document.querySelector('#buttonMamaGoat');
const mamaGoatStatus = document.getElementById('mamaGoatStatus');

let numberOfCarrots = 2;
mamaGoatButton.addEventListener('click', (e) => {
  numberOfCarrots = numberOfCarrots + 1;
  mamaGoatStatus.innerHTML = 'mama goat has had ' + numberOfCarrots + ' carrots!!';
});

const myPigButton = document.getElementById('buttonPig');
const myPigStatus = document.getElementById('pigStatus');
const myPigPicture = document.getElementById('pigImage')
console.log(myPigStatus);

myPigButton.addEventListener('click', (e) => {
  // change the text of myPigStatus
  // the content of myPigStatus will become "..."
  // change the image of myPigPicture
  myPigStatus.innerHTML = 'Peggy is clean now!!';


const alligatorButton = document.getElementById('alligatorButton');


const theBigContainer = document.querySelector('.container');
alligatorButton.addEventListener('click', (e) => {
  // destroy the page
  theBigContainer.innerHTML = '<h1>Oops! The zoo is now officially closed.</h1>';
});