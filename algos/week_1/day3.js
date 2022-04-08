// 1. DEFINE THE FUNCTION
function print1to50(){
    for(var i = 0; i < 51; i++){
        console.log(i)
    }
}

// 2. CALLING THE FUNCTION (EXECUTING THE FUNCTION)
print1to50()
print1to50()
print1to50()
print1to50()
print1to50()

function add(a,b){ // PARAMETERS == (a,b)
    return a + b
}

// 1. DEFINE THE FUNCTION
function multiply(num1,num2){
    return num1 * num2
}

// 2. CALLING THE FUNCTION
console.log(multiply(12,20))
console.log(multiply(45,45))

var result = multiply(4,4) // var result = 16
console.log(result)

// 1. PRACTICE
function multiply(num1,num2){
    console.log("INSIDE THE FUNCTION: ",num1 * num2)
    return num1 * num2
}

    console.log("OUTSIDE THE FUNCTION: ",multiply(25,25))

// 2. PRACTICE
var x = 5;

function setX(newValue) {
    x = newValue
}

console.log(x);
setX(15);
console.log(x);