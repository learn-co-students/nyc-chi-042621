// Mostly all functions in JS implicitly return `undefined` 

// Function Expression
let takesOneArgument = function(){

}

// Arrow Functions
let takesTwoArguments = (dollar, smile) => {
    console.log(dollar)
    console.log("Today is Tuesday")
    console.log(smile)
    return "Myles was here"
}


// Function Declaration
function takesThreeArguments(arg1, arg2, arg3){
    console.log("argument 1 is", arg1)
    console.log("argument 2 is", arg2)
    console.log("argument 3 is", arg3)

    return "This is what will get returned"
}


// Defintion
// let mystery = takesThreeArguments

let arrOfNums = [7, 8, 9]
let arrOfFuncDefs = [takesOneArgument, takesTwoArguments, takesThreeArguments]

// console.log(takesThreeArguments)

// Callback- Function definition into the invocation of a function
    // takesThreeArguments is the callback passed into forEach 

    // forEach decides how to use the callback

    // Callbacks are at the mercy of the function receiving it 

arrOfNums.forEach( takesThreeArguments )
arrOfNums.forEach( () => {} )
arrOfNums.forEach( function(chicken){
    console.log("chicken", chicken)
} )


// INVOCATION //
// Saving the return value of a function invocation()

// let returnString = takesThreeArguments("Arg 1", 2, "hello")
// let returnString2 = takesThreeArguments("cheese", "gouda")
// let returnString3 = takesThreeArguments("nike", "asics", "adidas", "crocs")