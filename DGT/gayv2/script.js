    // 5/10/20 changed all values from gays to cringe
    // default score and prestige amounts
    var score = 0;
    var will = 0;
    var amount1 = 0;
        // default currency amounts
    var cringe = 0;
    var cringePS = 0;
    var cringePC = 1;
    var cpsP = 30;
    
    
    function gainCringe() {
    
    cringe += cringePC;
    
    }
    setInterval(function renderCoins() {
        var cringeA = cringe.toFixed(2);
        document.getElementById("cringe").innerHTML = "Cringe: " + cringeA;
    
    })
    
    
    setInterval(function renderCoinsPS() {
    
        document.getElementById("cringePS").innerHTML = "Cringe per second: " + cringePS;
    
    })
    
    function getCringePS(){
    
    if (cringe >= cpsP){
        score += 15;
        cringePS += 1;
        cringe -= cpsP;
        cpsP *= 1.3;
        amount1 += 1;
        // i hate this, math.round() refuses to work with a variable
        // you have no idea how long i spent trying to make it to work, i absoloutly despise math.round()
        document.getElementById("cpsPr").innerHTML = "price: " + cpsP;
    }
    else{
        alert("Sorry, you don't have enough coins.")
    }
    }
    setInterval(function rendercpsP() {
        // math.round() is gay so i used .tofixed(2) instead and it worked first time with no problems
        var cpsPA = cpsP.toFixed(2);
        document.getElementById("cpsPr").innerHTML = "price: " + cpsPA;
    })
    setInterval(function coinPS(){
    
    cringe += cringePS;
    }, 1000)
    
    
    