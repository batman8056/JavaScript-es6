function Circle(radius){

    this.radius = radius;
    //if we declare the variable inside the constractor function we can able use inside we can't able to access outside
    //hide the defaultLocation and computeOptiumumLocation
    //local variable of the circle function defaultLocation
    let defaultLocation = {
        x:0,
        y:0
    };
    //we can get access defaultLocation property using another function to return
    this.getDefaultLocation = function(){
        return console.log('using simple function to get access ',defaultLocation);
    };
    this.draw = function(){
        console.log("draw");
    };

    //another way to access inside constractor property using this Object method
    Object.defineProperty(this, 'defaultLocation', {
        //get the value of the property outside constractor
        get: function() {
            return console.log('using Object notaion to get access ',defaultLocation);
        },
        //set the value inside property 
        set: function(value){
            if (!value.x || !value.y)
                throw new Error('Invaide location.');
            defaultLocation = value;

        }
    });
}
const circle = new Circle(1);
//call the getDefaultLocation function
circle.getDefaultLocation();
//get
circle.defaultLocation;
//set the value
circle.defaultLocation = 1;
