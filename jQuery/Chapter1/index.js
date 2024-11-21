// // If we give Script inside header section we need to define like this
// $(document).ready(function(){
//     $("h1").css("color", "red");
// });



// //other wise we simply use like this
// console.log($("h1").css("color"));//we will get color value in h1

// console.log($("button").css("color", "red").css("color"));//select all the button


// $("h1").addClass("big-title");//we assign new class in h1 here based on class css can apply


// $("h1").removeClass("big-title");//here we removed class in h1


// $("h1").addClass("big-title margin-50");//we can add multiple class in single method

// console.log($("h1").hasClass("margin-50"));//true


// $("h1").text("Bye");//we can modify the value of h1

// $("a").attr("href", "https://google.com");//anger tag inside set href link using attr


////once we click the h1 element color will be changed red
// $("h1").click(function(){
//     $("h1").css("color", "red");
// });

// //no need to use for loop when we chosse button all the buttom will be chossen
// $("button").click(function(){
//     $("h1").css("color", "red");
// });


// //when we give input any key it can be printed in console
// $("input").keypress(function(event){
//     console.log(event.key)
// });

// //we can modify value of h1 what we given value of keypressed
// $("body").keypress(function(event){
//     $("h1").text(event.key);
// });

// //we can move mouse close to h1 color will be changed yellow
// $("h1").on("mouseover",function(){
//     $("h1").css("color","yellow")
// });

// //Adding new Element before h1
// $("h1").before("<button>before h1 button</button>");

// //Adding new Element after h1
// $("h1").after("<button>after h1 button</button>");

// //Adding new Element prepend h1
// $("h1").prepend("<button>prepend h1 button</button>");

// //Adding new Element append h1
// $("h1").append("<button>append h1 button</button>");


// $("button").remove();//we can remove button element in the document

// // //hide and unhide the h1
// $("button").on("click",function(){
//     $("h1").toggle();
// });


// // fade out h1
// $("button").on("click",function(){
//     $("h1").fadeOut();
// });


// //fadeout and fadein h1 using fadeToggle
// $("button").on("click",function(){
//     $("h1").fadeToggle();
// });

// //Slide up the h1 
// $("button").on("click",function(){
//     $("h1").slideUp();
// });

// //slide up and down the h1
// $("button").on("click",function(){
//     $("h1").slideToggle();
// });

//animate method we can add new css rules inside of the method
// $("button").on("click",function(){
//     $("h1").animate({opacity: 0.5});
// });


//we can use three method simuntanusily
$("button").on("click",function(){
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});


