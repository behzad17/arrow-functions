/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
//function addTwoNumbers(a, b) {
    //return a + b;
 //node arrow-functions.js
 // }
  //let sum = addTwoNumbers(3, 5)
  //console.log(sum);
// Arrow Function With Parameters
 
const addTwoNumbers = (a, b) => {
    return a + b;
  }
  let sum = addTwoNumbers(3, 5)
  console.log(sum);
// Single Line Arrow Function With Parameters

const addTwoNumbers2 = (a, b) => a + b ;
  let sum2 = addTwoNumbers2(6, 4);
  console.log(sum2);
// Implicit Returns

const saySomething = message => console.log(message);
saySomething('Hello there!!')
// Returning Multiple Lines
const sayHello = () => console.log('Hello');
sayHello();

const returnMultipleLine = () => (
   `<P>
   This is a multiline string!
   </p>` 
) 
console.log(returnMultipleLine());