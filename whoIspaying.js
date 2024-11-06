const whosPaying = (names) => {
    
    /******Don't change the code above*******/
        
        //Write your code here.
        const randomIndex = Math.floor(Math.random() * names.length);
        const selectedPerson = names[randomIndex];
        return `${selectedPerson} is going to buy lunch today!`;
         
    /******Don't change the code below*******/    
    }

console.log(whosPaying(["Angela", "Ben", "Jenny", "Michael", "Chloe"]))