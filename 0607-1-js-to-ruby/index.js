function returnsInstructors(numOfPets){
    let instructors = [
        {name: "Eric", lecturer: false, pets: numOfPets},
        {name: "Ix", lecturer: true, pets: 5},
        {name: "Louis", lecturer: true, pets: 2}
    ]

    return instructors
}


let thing1 = returnsInstructors
let thing2 = returnsInstructors()

thing2.push({name: "Dakota", lecturer: true, pets: 3})

console.log("Thing 1:", thing1)
console.log("Thing 2:", thing2)


let arrOfNames = thing2.map((instructor) => {
    return instructor.name
})

thing2.filter((instructor) => {
    return instructor.lecturer
})

thing2.find((instructor) => {
    return instructor.pets > 1
})
