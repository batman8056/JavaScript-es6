
const bmiCalc = (weight, height)=>{
    var bmi = (weight / (height * height));
    return Math.round(bmi);
}
console.log(bmiCalc(65,1.8))