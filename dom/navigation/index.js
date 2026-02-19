/* navigation
*   - getting an element from an element relative to itself
*   - those accesses elements is now subjected to manipulation/configuration
*/

let bakers = document.getElementById('bakers');
let firstBaker = bakers.firstElementChild;

firstBaker.style.color = 'blue';

let lastBaker = bakers.lastElementChild;
lastBaker.style.color = 'red';
