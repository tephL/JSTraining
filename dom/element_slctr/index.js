/* element selection methods:
    - to manipulate and obtain an element, its properties, and its attributes  

   1. getElementById() -- element or null
   2. getElementbyClassName() -- collection
   3. getElementbyTagName()  -- collection
   4. querySelector() -- first element occurence or null
   5. querySelectorAll(.class | #id | tag) -- collection of the matched elements
                                           -- has a forEach method
*/

const title = document.getElementById('title');

title.style.color = 'yellow';
document.body.style.backgroundColor = 'black';

const pastries = document.getElementsByClassName('pastries'); // returns all elements as an array

// DOM obj doesnt have forEach()
// typecast it as an array if u want to use array methods
for(pastry of pastries){
    pastry.style.color = 'white';
}

pastries[0].style.backgroundColor = 'green';


// all elements that are h5
const doors = document.getElementsByTagName('h5');

Array.from(doors).forEach(element => element.style.color = 'purple');

const first_h4 = document.querySelector('h4');
first_h4.style.color = 'blue';

const all_divs = document.querySelectorAll('div');
all_divs.forEach(element => {
    element.style.backgroundColor = 'red'
});
