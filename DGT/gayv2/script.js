const cps =  "setInterval(function renderCoins()";
let gay = 0;
let gaypc = 10;
let gayps = 0;
let Tgay = 0;
let score = 0;
let gaya;
let Gaypsprice = 30;
let GaypspriceA = 30;

function genprices() {
    var GaypspriceA = Gaypsprice.toFixed(2);
    document.getElementById("gen1").innerHTML = "price: " + GaypspriceA;
}


function clickG() {
    gay += gaypc;
    score += gaypc;
    console.log(gay);
}
function bvbux(){
    genprices();
    if(gay >= GaypspriceA){
        gayps += 1;
        gay -= Gaypsprice;
        Gaypsprice *= 1.3;
        genprices();
    }
    else {
        alert("your not gay enough to buy vbux")
    }
}







setInterval(function persec() {
    gay += gayps;
}, 1000)
setInterval(function renderGay() {
    gaya = gay.toFixed(2);
    document.getElementById("gay").innerHTML = "Gay: " + gaya;
    document.getElementById("gayps").innerHTML = "Gay per second: " + gayps;

}, 100)
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