// // Factories function:-
// function createCircle (radius){
//     return {
//     radius,//if we have key and value have same name we remove the value
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

// call back function use to call here is this is object
Circle.call({},1)
//call the function instade of passing an arg we passing an array
Circle.apply({},[1]);
//Function are object:
const Circle1 = new Function('radius',`console.log("this",this);
    this.radius = radius;
    this.draw = function(){
        console.log("draw");
    }`)

    //calling the Function are object
  const circle =new Circle(1)  ;
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


//build in constractor
// new String();//'', "", ``
// new Boolean();//TRUE, FALSE
// new Number();//1,2,3,4