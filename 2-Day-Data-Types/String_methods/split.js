// split(): The split method splits a string at a specified place.
let string = "30 Days Of JavaScript"
console.log(string.split())     // ["30 Days Of JavaScript"]
console.log(string.split(' '))  // ["30", "Days", "Of", "JavaScript"]
let firstName = "Filpos"
console.log(firstName.split())  // ["filpos"]
console.log(firstName.split(''))  // ["F", "i", "l", "p", "o", "s"]
let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'
console.log(countries.split(',')) // ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
console.log(countries.split(', '))   //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]