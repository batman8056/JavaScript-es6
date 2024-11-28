function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log("draw");
    }
}
//this object is dynamic that mean we can add and remove
const circle = new Circle(1);

// Adding the property using dot notation to Circle
// circle.location = {x:1};
//Another way Adding the property using Squire bracket notation to Circle
// const propertyName = 'location';
// circle[propertyName] = { x : 1};


//Removing the property simply use delete operater
// delete circle.location;
// console.log(circle);


//for loop we will get all the key in the circle
// for (let key in circle){
//     // console.log(key);
//     //here using bracket notation we will get key and value
//     //and also using if condition to avoid function
//     if (typeof circle[key] !== 'function')
//         console.log(key,circle[key]);
// };

//using keys function to get only keys in array
// const key =Object.keys(circle);
// console.log(key);

//we will check the radius inside object using if condition
if ('radius' in circle)
    console.log('the circle inside object radius is present!')
