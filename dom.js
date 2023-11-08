
const h1 = document.querySelector('h1');
h1.innerText

h1.innerText = "i'm hungry"
console.log(h1);

const li = document.querySelector('ul li.special');
li.innerText
li.textContent = "i'm a big boy !!!"
console.log(li);

li.style 
li.style.color = 'green';






const p = document.querySelector('p.special');
p.innerText = 'The big boy club !'
console.dir(p);

p.style
p.style.color = 'yellow';

const img = document.querySelector("img");
console.dir(img);

img.src = './images/captain.jpeg';

console.error ('This page is not found')


const images = document.querySelector("div img");
console.dir(images);

images.src = './images/nike2.jpg';


const ul = document.querySelector ('ul li.special');
li.innerText
li.textContent = "I'm a big boy !!!"

const inputs = document.querySelectorAll('input');
inputs

inputs[0].value
inputs[1].value
inputs[2].checked
inputs[1].placeholder

inputs[1].placeholder = "please kindly enter your password";

const range = document.querySelector('input[type="range" ]');

range.getAttribute('max');

range.getAttribute('min');

range.getAttribute('type');
range.setAttribute ('type', 'radio');

const firstLi = document.querySelector('li');
firstLi

firstLi.parentElement;
firstLi.parentElement.parentElement;
firstLi.parentElement.parentElement.parentElement;

const secondLi = firstLi.nextElementSibling.nextElementSibling;
const thirdLi = document.querySelector("section ul li.special");
thirdLi
thirdLi.style.backgroundColor = 'red';
thirdLi.style.fontSize = '40px';
thirdLi.style.width = '80%';
thirdLi.style.color = 'green';


const fourthLi = document.querySelector("div ul li");
fourthLi;
fourthLi.nextElementSibling;
fourthLi.style.color = "orange";
fourthLi.nextElementSibling.style.color = "blue";
fourthLi.nextElementSibling.nextElementSibling.style.fontSize = "40px"
fourthLi.nextElementSibling.nextElementSibling.nextElementSibling.style.color ="green";







//function declaration

function logger() {
    console.log ("You are a winner !!!");
}
logger();
logger();
logger();

function information (firstName, lastName) {
    console.log(`My name is ${firstName} ${lastName}`);
}
information('peter', 'perry');
information('Lekan', 'Samuel');

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples,oranges,grape) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const grapePieces = cutFruitPieces(grape);
    const juice = `Juice with ${applePieces} piece of apple and ${orangePieces}pieces of orange. and ${grapePieces}pieces of grape.`
    return juice;
}

console.log(fruitProcessor(5,12,10));

function calcAge (birthYear) {
    return 2023 - birthYear;
}
const ageCalc1 = calcAge(1995);
const ageCalc2 = calcAge(1990);
console.log(ageCalc1, ageCalc2);


// Arrow function
const calcAge1 = birthYear => 2023 - birthYear;
const ageCalc3 = calcAge1 (1996);
console.log(ageCalc3);

const yearsUntilRetirement = (birthYear,firstName) => {
    const age = 2023 - birthYear;
    const retirement = 65 - age ;
    return `${firstName} retires in ${retirement} years.`;
}
console.log(yearsUntilRetirement(1960, 'peter'));
console.log(yearsUntilRetirement(1962, 'bob'));


   
const newh2 = document.createElement ('h2');
console.dir(newh2);

newh2.innerText = 'I like animals';
newh2.classList.add('special');
newh2.classList.remove('special');

const section = document.querySelector('section');
section.appendChild(newh2);

const createButton = document.createElement ("button");
createButton.classList.add('btn-ghost');
createButton.innerText ='wisdom';
section.appendChild(newh2);
section.appendChild(createButton);


const date = document.querySelector('input[type="date" ]');

date.getAttribute('date');

date.getAttribute('type');
date.setAttribute ('type', 'checkbox');


const newh4 = document.createElement ('h4');
console.dir(newh4);
newh4.innerText = "I'm in love with an angel";
newh4.classList.add ('special');
const div = document.querySelector ('div');
div.appendChild(newh4);



