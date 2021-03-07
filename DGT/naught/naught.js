let clickCounter = 1;
let numclicks = 0;
let cards = ['', '', '', '', '', '', '', '', ''];
let win1 = ['1','1','1','','','','','','']
// if you read this jury is gay
/*function checkwinner(){
if (numclicks >= 3){
    if (cards[0] = 1){
        if (cards[1] = 1){
            if (cards[2] = 1){
                alert("x wins");
            }
                else{
                    alert("no");
                    }
        }
            else{
                alert("no");
                }
    }
    else{
        alert("no");
    }
}
else{
    
}
}*/
function compareVariable(a,b,c){
    if ((a == b) && (b == c) && (a != '')) {
        winner = a;
        return true;
    }
}
function checkWinner(){
    if (compareVariable(cards[0], cards[1], cards[2])) {
        if (winner == 1) {
            alert("0 wins");
        } else if (winner == 2) {
            alert("X wins");
        }
    } 
    if (compareVariable(cards[3], cards[4], cards[5])) {
        if (winner == 1) {
            alert("0 wins");
        } else if (winner == 2) {
            alert("X wins");
        }
    } 
    if (compareVariable(cards[6], cards[7], cards[8])) {
        if (winner == 1) {
            alert("0 wins");
        } else if (winner == 2) {
            alert("X wins");
        }
    } 
    if (compareVariable(cards[0], cards[3], cards[6])) {
        if (winner == 1) {
            alert("0 wins");
        } else if (winner == 2) {
            alert("X wins");
        }
    } 
    if (compareVariable(cards[2], cards[4], cards[7])) {
        if (winner == 1) {
            alert("0 wins");
        } else if (winner == 2) {
            alert("X wins");
        }
    } 
    if (compareVariable(cards[3], cards[5], cards[8])) {
        if (winner == 1) {
            alert("0 wins");
        } else if (winner == 2) {
            alert("X wins");
        }
    } 
    if (compareVariable(cards[0], cards[4], cards[8])) {
        if (winner == 1) {
            alert("0 wins");
        } else if (winner == 2) {
            alert("X wins");
        }
    } 
    if (compareVariable(cards[2], cards[4], cards[6])) {
        if (winner == 1) {
            alert("0 wins");
        } else if (winner == 2) {
            alert("X wins");
        }
    } 
}


function restart() {
    cards[1] = '';
        cards[2] = '';
            cards[3] = '';
                cards[4] = '';
                    cards[6] = '';
                        cards[7] = '';
                            cards[8] = '';
                                    cards[0] = '';
                                        cards[5] = '';
                                        document.getElementById("image0").src = 'naughtimages/naughtN.gif';
                                        document.getElementById("image1").src = 'naughtimages/naughtN.gif';
                                        document.getElementById("image2").src = 'naughtimages/naughtN.gif';
                                        document.getElementById("image3").src = 'naughtimages/naughtN.gif';
                                        document.getElementById("image4").src = 'naughtimages/naughtN.gif';
                                        document.getElementById("image5").src = 'naughtimages/naughtN.gif';
                                        document.getElementById("image6").src = 'naughtimages/naughtN.gif';
                                        document.getElementById("image7").src = 'naughtimages/naughtN.gif';
                                        document.getElementById("image8").src = 'naughtimages/naughtN.gif';
                                        clickCounter = 1;
                                        timeron = 0;
                                        time = 0;

}
function press(gridnum, id) {
    if (cards[gridnum] == ['']) {
    if (clickCounter == 1) {
        cards[gridnum] = clickCounter;
        document.getElementById(id).src = "naughtimages/naughtX.jpg";
        clickCounter = 2;
    }
    else if (clickCounter == 2) {
        cards[gridnum] = clickCounter;
        document.getElementById(id).src = "naughtimages/naughtO.jpg";
        clickCounter = 1;
    }
}
checkWinner();
}
let timeron = '0';
let time = 0;
setInterval(function timer0(){
if (timeron == 1) {
    time += 0.1;
        document.getElementById("timer").innerHTML = "time: " + time;
}
}, 100)

function start(){
    timeron = 1;
}