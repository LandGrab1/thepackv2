let coin = 0;
console.log("test")


function click() {
    coin += 1;
    console.log(coin);
    document.getElementById("coins").innerHTML = `${coin}coins`;
}

let weight100;
function forage() {
    weight100 = Math.random * 100;
    
}