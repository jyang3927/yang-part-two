let totalPutts = 0; 
let putts = 0; 
let threeHolePar = 9; 
let sixHolePar = 18; 

//Prompt user for name 
let name = prompt("Welcome to Mini Golf! What is your name?");
console.log(name); 

//prompt user if they would like to play 3 or 6 holes of mini golf 
let numOfHoles = Number(prompt(`Hi ${name}! Would you like to play 3 or 6 holes?`)); 

if (numOfHoles === 3) {
    for (let i = 1; i < numOfHoles + 1; i++){
        //prompt user for number of putts
        putts = Number(prompt(`How many putts for hole ${i}`)); 
        while (putts < 1) {
            alert("Invalid Number. Try again");
            putts = Number(prompt(`How many putts for hole ${i}`)); 
        }
        //get cumulative score of user 
        totalPutts += putts;  
    }
    let finalScore = Math.abs(threeHolePar - totalPutts); 
    if (totalPutts < threeHolePar)
    {
        console.log (`Great job, ${name}! Your total par was -${finalScore}.`); 
    }
    else if (totalPutts == threeHolePar){
        console.log (`Good game, ${name}! Your total par was ${finalScore}.`); 
    }
    else {
        console.log(`Nice try, ${name}! Your total par was +${finalScore}.`);
    }

}
else if (numOfHoles === 6) {
    for (let i = 1; i < numOfHoles + 1; i++){
        //prompt user for number of putts 
        putts = Number(prompt(`How many putts for hole ${i}`)); 

        while (putts < 1) {
            alert("Invalid Number. Try again");
            putts = Number(prompt(`How many putts for hole ${i}`)); 
        }
        //get cumulative score of user 
        totalPutts += putts;  
    }
    let finalScore = Math.abs(sixHolePar - totalPutts); 
    if (totalPutts < sixHolePar)
    {
        console.log (`Great job, ${name}! Your total par was: -${finalScore}.`); 
    }
    else if (totalPutts == sixHolePar){
        console.log (`Good game, ${name}! Your total par was: ${finalScore}.`); 
    }
    else {
        console.log(`Nice try, ${name}! Your total par was: +${finalScore}.`);
    }
}
else {
    alert("Invalid Number"); 
}