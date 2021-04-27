let coin = 0;
console.log("test")


function click() {
    coin += 1;
    console.log(coin);
    document.getElementById("coins").innerHTML = `${coin}coins`;
}