function Circle(radius){

    this.radius = radius;
    //if we declare the variable inside the constractor function we can able use inside we can't able to access outside
    //hide the defaultLocation and computeOptiumumLocation
    //local variable of the circle function defaultLocation
    let defaultLocation = {
        x:1,
        y:2
    }
    //we can't able to access the computeOptiumumLocation outside object because we used inside another function
    this.computeOptiumumLocation = function(factor){
        //........
        console.log('print the factor value ',factor);
    };
    this.draw = function(){
        //temprovery variable x and y
        let x,y;
        //we can call the property of defaultLocation and store the temp variable 
        let temp=defaultLocation.x;

        //when we try to call computeOptiumumLocation function
        this.computeOptiumumLocation(0.1);
        console.log("draw",temp);
    };
}


const circle = new Circle(1);
//call the draw function
circle.draw();