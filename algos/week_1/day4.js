// ARRAY

var fullName = "Cameron Carter"
var age = 30
var married = false


varuserInfo = ["Cameron Carter", 30, "San Jose", false]
console.log(userInfo[0])
console.log(userInfo[3])



// 1. ARRAYS SHOULD HOLD THE SAME DATA TYPES
// 2. ARRAYS SHOULD HOLD LIKE DATA TYPES
var firstName = ["Edward", "Jane", "John", "Steve", "Smith"]
var evenNumbers = [2,4,6,8,10]
var users = ["Edward Im", "Jane Doe", "John Doe"]


// ADDING TO AN ARRAY - push
var nameArray = []
nameArray.push("Edward Im")
nameArray.push("John Doe")
nameArray.push("Jane Doe")

console.log(nameArray)

// REMOVING FROM AN ARRAY - pop
// console.log("REMOVED VALUE FROM ARRAY: ", nameArray.pop())
var removedPerson = namneArray.pop()
console.log(nameArray)
nameArray.pop()

// GETTING THE LENGTH(SIZE) OF THE ARRAY
nameArray.length // ATTRIBUTE

// LAST VALUE IN A GIVEN ARRAY
nameArray[nameArray.length] - 1

// FIRST VALUE IN A GIVEN ARRAY
nameArray[0]



// ITERATING THROUGH AN ARRAY
for(var i = 0; index < nameArray.length ;index++){
    console.log(nameArray[i])
}

function printArray(){
    for(var i = 0; index < nameArray.length ;index++){
        console.log(nameArray[i])
}

// 2. CALLING (EXECUTING) THE FUNCTION
printArray(['a','b','c','d','e','f'])