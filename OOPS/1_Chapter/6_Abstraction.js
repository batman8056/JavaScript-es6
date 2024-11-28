function Circle(radius){
    this.radius = radius;
    this.defaultLocation = {
        x:1,
        y:2
    }
    this.computeOptiumumLocation = function(){
        //........
    }
    this.draw = function(){
        //when we try to call computeOptiumumLocation function
        this.computeOptiumumLocation();
        console.log("draw");
    };
}


const circle = new Circle(1);
circle.defaultLocation= false;