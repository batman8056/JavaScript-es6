
// //Procedural Programming:-

// let baseSalary=30000;
// let overtime = 10;
// let rate= 20;

// function getWage(baseSalary, overtime, rate ){
//     return baseSalary+(overtime * rate);
// }
// console.log(getWage(baseSalary, overtime, rate));


//Object orianed programming
let employee = {
    baseSalary:30000,
    overtime : 10,
    rate:20,
    getWage : function(){//no parameter because inside object all the property present use this keyword to access
        return this.baseSalary + (this.overtime * this.rate);
    }
};
console.log(employee.getWage());