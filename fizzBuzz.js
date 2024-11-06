const fizzBuzz =(input)=>{
    if (typeof input !== 'number')
        return NaN;
    else if ((input % 3 ===0) && (input % 5 ===0 ))
        return "fizzbuzz";
    else if (input % 3 ===0 )
        return "fizz";
    else if(input % 5 ===0 )
        return "buzz";
    return input;
}

const output=fizzBuzz(21);
console.log(output);