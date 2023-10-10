// constants for query selector
const myStudentId = document.querySelector('#myStudentId');
const custColor = document.querySelector('.custColor');
const randColor = document.querySelector('.randColor');
const imageSelect = document.querySelector('#imageSelect');
const images = document.querySelector('#images');
const body = document.querySelector('body');

// function to change bg color from user input and add student id
function changeCustomColor() {
    // I change the data type to numeric type by using "Number", so that I can check the value through if-else statement.
    const customNumber = Number(document.querySelector('#customNumber').value);
    
    // If this method is called, this student number will be shown. 
    myStudentId.textContent = '200535561';
    
    // According to the user input value, the background colour will be changed.
    if (customNumber <= 0 || customNumber >= 100)
        body.style.backgroundColor = 'red';
    else if (customNumber > 0 && customNumber <= 20)
        body.style.backgroundColor = 'green';
    else if (customNumber > 20 && customNumber <= 40)
        body.style.backgroundColor = 'blue';
    else if (customNumber > 40 && customNumber <= 60)
        body.style.backgroundColor = 'orange';
    else if (customNumber > 60 && customNumber <= 80)
        body.style.backgroundColor = 'purple';
    else if (customNumber > 80 && customNumber <= 100)
        body.style.backgroundColor = 'yellow';
}

// function to change bg color from random no.
function changeRandomColor() {
    // According to the randomly generated number, the backgrond colour will be changed.
    const randNum = Math.floor(Math.random()*(100-1+1)+1);
    if (randNum <= 0 || randNum >= 100)
        body.style.backgroundColor = 'red';
    else if (randNum > 0 && randNum <= 20)
        body.style.backgroundColor = 'green';
    else if (randNum > 20 && randNum <= 40)
        body.style.backgroundColor = 'blue';
    else if (randNum > 40 && randNum <= 60)
        body.style.backgroundColor = 'orange';
    else if (randNum > 60 && randNum <= 80)
        body.style.backgroundColor = 'purple';
    else if (randNum > 80 && randNum <= 100)
        body.style.backgroundColor = 'yellow';
}

// This list is for storing the image paths.
const imgList = ['img/img1.jpg','img/img2.jpg','img/img3.jpg','img/img4.jpg','img/img5.jpg'];

// function to generate options for select list
function addList() {
    // Tip: you might have to check length condition so that the list does not keep growing when clicked
    // Tip: use createElement and appendChild inside every for loop to add elements to select list from array 
    for(let i=0; i <imgList.length; i++) {
        // The newly created option element will be stored in the "option" variable.
        const option = document.createElement('option');
        option.value = imgList[i];  //  option.value will store the full paths of images
        // I set the names in the option by using relace
        const fileName = imgList[i].replace('img/', ''); 
        option.textContent = fileName;
        imageSelect.appendChild(option);
    }
}

addList();

// function to change image
function changeImage() {
    const imageChoice = imageSelect.value; // imageChoice varible will store the image path which user choose
    images.src = imageChoice;              // Then, imageChoice will be assgined to the src of the img element 
    images.style.display = 'block';        // This is to show the image.(I set the default value of display to none) 
}
// event listeners for on click event of buttons and select
custColor.addEventListener('click', changeCustomColor);
randColor.addEventListener('click', changeRandomColor);

// event listeners for on change event of select
imageSelect.addEventListener('change', changeImage);