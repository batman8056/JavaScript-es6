const fibonacciGenerator = (n)=>{
    //Do NOT change any of the code above 👆
        
        //Write your code here:
        var sequence = [];
    
        if (n >= 1) sequence.push(0);
        if (n >= 2) sequence.push(1);
    
        for (var i = 2; i < n; i++) {
            // Calculate the next number in the sequence
            sequence.push(sequence[i - 1] + sequence[i - 2]);
        }
    
        return sequence;
        
        //Return an array of fibonacci numbers starting from 0.
        
    //Do NOT change any of the code below 👇
    }
    
console.log(fibonacciGenerator(5))