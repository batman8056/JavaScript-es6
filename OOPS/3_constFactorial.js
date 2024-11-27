// // Factories function:-
// function createCircle (radius){
//     return {
//     radius,//if we have key and value have same same we remove the value
//     draw:function(){
//         console.log("draw");
//     }
// };
// }
// const circle = createCircle(1);
// circle.draw();


// Constractors function:- or Class

function Circle(radius){
    console.log("this",this);
    this.radius = radius;
    this.draw = function(){
        console.log("draw");
    }
}

// Class
// class Circle {
//     constructor(radius) {
//         this.radius = radius; // Initialize radius property
//     }

//     draw() {
//         console.log("Drawing a circle with radius", this.radius);
//     }
// }


//new operater first create an empty object then point the is object 
//we make it Constractor function into new object using new keyword
// newly created object can be return the object of the Constractors function
const another = new Circle(1);


another.constructor

