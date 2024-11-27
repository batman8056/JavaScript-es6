//Priimitive are copy by their value
// let x = 10;
// let y = x;//we copy the value of x to y
// x = 20;

//Object  are copied by their Referance 
let x = {value:10};
let y = x;//we can't copy the value of x to y because x is object stored in memory
x.value = 20;

console.log("x value is ",x, "y value is ",y);


