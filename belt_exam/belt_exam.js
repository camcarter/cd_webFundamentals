var buy = 0
var countElement = document.querySelector(".cart");

console.log(countElement);

function cartValue(){
    console.log("CART VALUE")

    // INCREMENT
    buy++
    countElement.innerText = "" + buy;

    // METHOD QUERY SELECTION
    var buyButton = document.querySelector(".buy")

}

