const cps =  "setInterval(function renderCoins()";
let gay = 0;
let gaypc = 1;
let gayps = 0;
let Tgay = 0;
let gaya;
function click() {
    gay += gaypc;
    score += gaypc;
    console.log(gay);
}
function bvbux(){
    if(gay >= 30){
        gayps += 1;
        gay -= 30;
    }
    else {
        alert("your not gay enough to buy vbux")
    }
}








setInterval(function renderCoins() {
    gaya = gay.toFixed(2);
    document.getElementById("cringe").innerHTML = "Gay: " + gaya;
    document.getElementById("cringePS").innerHTML = "Gay per second: " + gayps;

}, 1000)
// 5/10/20 changed all values from gays to cringe
// default score and prestige amounts
//var score = 0;
//var will = 0;
//var amount1 = 0;
// default currency amounts
//var cringe = 0;
//var cringePS = 0;
//var cringePC = 1;
//var cpsP = 30;


/*    function gainCringe() {

cringe += cringePC;

}
setInterval(function renderCoins() {
    var cringeA = cringe.toFixed(2);
    document.getElementById("cringe").innerHTML = "Cringe: " + cringeA;

})


setInterval(function renderCoinsPS() {

    document.getElementById("cringePS").innerHTML = "Cringe per second: " + cringePS;

})
setInterval(function rendercpsP() {
    var cpsPA = cpsP.toFixed(2);
    document.getElementById("cpsPr").innerHTML = "price: " + cpsPA;
})
setInterval(function coinPS(){

cringe += cringePS;
}, 1000)
function getCringePS(){

if (cringe >= cpsP){
    score += 15;
    cringePS += 1;
    cringe -= cpsP;
    cpsP *= 1.3;
    amount1 += 1;
    document.getElementById("cpsPr").innerHTML = "price: " + cpsP;
}
else{
    alert("Sorry, you don't have enough coins.")
}
}


*/