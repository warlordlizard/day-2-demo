'use strict';

var kids = prompt('How many kids does Alex have?');
console.log('num of kids', kids);

var hats = prompt('How many hats does Alex have?');
console.log('num of hats', hats);

if (kids === '3' || kids === '4') {
  alert('You are right!');
}
if (kids === '3' && hats.toLowerCase() === 'none') {
  alert('u right again')
}
