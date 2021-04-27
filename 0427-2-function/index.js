// Function - Set of instructions to carry out a process


// Arrow Function
let takesTwoArguments = () => {
    let three = 3
    return three
        // OR
    // return 3
}

// Function Expression
let takesOneArgument = function(callback){
    let i = 0
    while(i < 3){
        callback(2)
        i++
    }
}


// Function Declaration
function takesThreeArguments(arg1, arg2, arg3){
    console.log("First arg is", arg1)
    console.log("Second arg is", arg2)
    console.log("Third arg is", arg3)

    let thingToBeReturned = () => {
        console.log("goodbye")
        return "Goooooodbye"
    }

    return thingToBeReturned
}

// let theReturnValue = takesThreeArguments("Hello", 47, [])
// let theReturnValue2 = takesThreeArguments("Goodbye")
// let theReturnValue3 = takesThreeArguments("Goodbye", 3, 4, 6, false)

let returnVal = takesThreeArguments


let arrOfNums = [7,8,9]
let arrOfStrings = ["Zebra", "Chips", "Dranks"]

let arrOfFuncDefs = [takesOneArgument, takesTwoArguments, takesThreeArguments]


// Callback: Function Definition passed into Function invocation
    // takesThreeArguments is the callback
    // takesThreeArguments is at the mercy of forEach

arrOfNums.forEach( takesThreeArguments )
arrOfNums.forEach( () => {} )
arrOfNums.forEach( function(){} )
