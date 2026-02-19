// ADD, REMOVE, and MANIPULATE in JS


// creating a new element
let title = document.createElement('h1');
let titleBig = document.createElement('h1');

//adding attributes/properties
title.textContent = 'tephL';
titleBig.textContent = 'bruh';

// adding an element to the document structure
document.body.append(title);
// using prepend adds it before all the childrens of the target
document.body.prepend(titleBig); 

// removing an element from the DOM structure
const parent = document.getElementById('parent');
const child = document.getElementById('child');

parent.removeChild(child);