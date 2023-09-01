// QUESTION 1

function drawLine(lineLength) {
  if(lineLength === 1){
    return "="
  } else if(lineLength === 2){
    return "=="
  }
  else if(lineLength === 3){
    return "==="
  }
  else if(lineLength === 4){
    return "===="
  }
  else if(lineLength === 5){
    return "====="
  }
}
console.log(drawLine(1));
console.log(drawLine(2));
console.log(drawLine(3));
console.log(drawLine(4));
console.log(drawLine(5));


// QUESTION 2


// QUESTION 3

// ARRAY METHODS & EXAMPLES

const names = ['Chidel', 'Daniel', 'Emmanuel', 'Sunny', 'Chinedu']

// Length (to get the whole length of an array) 

console.log(names.length); 
// names.length gives the whole length of the array
console.log(names [names.length - 1]);
// this subtract 1 from the array length and then displays the element of the number its represent. this will display "Chinedu" 


// Concat 
const lastNames = ['Ozor', 'Eze', 'Paul', 'Nnadi', 'Okey'] 
const allNames = names.concat(lastNames);
console.log (allNames);

// reverse
console.log(allNames.reverse());

// Unshift
allNames.unshift('David');
allNames.unshift('Solomon');
console.log(allNames);

// Shift
allNames.shift();
allNames.shift();
allNames.shift();
console.log(allNames);

// push
allNames.push('usman');
console.log(allNames);























// QUESTION 4