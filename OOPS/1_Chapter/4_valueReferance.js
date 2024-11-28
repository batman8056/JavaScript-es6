//Priimitive are copy by their value
// let x = 10;
// let y = x;//we copy the value of x to y
// x = 20;

// //Object  are copied by their Referance 
// let x = {value:10};
// let y = x;//we can't copy the value of x to y because x is object stored in memory
// x.value = 20;

// console.log("x value is ",x, "y value is ",y);


// let number = 10;

// function increase(number){
//     number ++;
// }

// increase(number);
// //it is refering to the variable of number to featch the data
// console.log(number);


//if we have object of value is 10
let obj = {value:10};

function increase(obj){
    obj.value ++;
}

increase(obj);
//it is refering to the object value to to perform the increase opertaion then return value
console.log(obj);
