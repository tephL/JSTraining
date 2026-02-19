/* DOM - Document Object Model
       - provides API to manipulate the html objects
       - properties are arranged in a tree like order
*/

let username = 'tephL';

let title = document.getElementById('title');
title.textContent += username != '' ? username : 'guest';

//manipulate the title (document obj) with style.color
title.style.color = "white";

// manipulate the document's body's style's bg color with this
document.body.style.backgroundColor = "hsl(0, 0%, 15%)";

// title of the html
document.title = `stephen's site`;

// console.dir(document); // all objects of the document that could be accessed