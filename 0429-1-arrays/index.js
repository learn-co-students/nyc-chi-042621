let arrayOfStrings = ["dog", "cat", "zebra", "chicken"]
let arrayOfNums = [1, 34, 92, 18]
let arrayOfObjs = [
    {name: "Eric", grade: 9}, 
    {name: "Ix", grade: 100},
    {name: "Chase", grade: 94}
]

const daysOrders = [
    {
        id: 13,
        flavor: 'Salted Carmel',
        size: '6" cake',
        amount: 1,
        price: 40.00
    },
    {
        id: 14,
        flavor: 'Raspberry Cardamon Rose',
        size: '9" cake',
        amount: 1,
        price: 50.00
    },
    {
        id: 15,
        flavor: 'Pink Champagne',
        size: 'cup cake',
        amount: 25,
        price: 37.5
    },
    {
        id: 1,
        flavor: 'Earl Grey',
        size: 'cup cake',
        amount: 12,
        price: 18.00
    }
]

// Map -> Transform the elements of an array
    // Returns the array

function doubleNum(element){
    console.log(dan)
    return element * 2
}

function returnDoubleArray(arr){ 
    let dan = "Cool guy"

    return arr.map((ele) => {
        console.log(dan)
        return ele * 2 
    })     
}

let returnDoubleArrayAF = (arr) => { 
    let dan = "Cool guy"
    return arr.map(doubleNum) 
}


