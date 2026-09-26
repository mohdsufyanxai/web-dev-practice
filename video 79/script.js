let a = prompt("enter your first number")

let b = prompt("enter your second number")
if (isNaN(a) || isNaN(b)){
    throw SyntaxError("sorry pls use only numbers")
}

let sum = parseInt(a) + parseInt(b)

function main(){
    let x = 1;

    try {
        console.log("the sum is", sum*x)
    
    } catch (error) {
        console.log("oh bahi error a gaya bahi")
    }

    finally{
        console.log("hellow worls first is meow meow ghop ghop");
        
    }
}
let c = main()