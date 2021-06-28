
var currentstate = [
    {0:"r",1:"n",2:"n",3:"n",4:"n",5:"n",6:"n",7:"n",8:"n",9:"n",},
    {0:"n",1:"b",2:"n",3:"n",4:"n",5:"n",6:"n",7:"n",8:"n",9:"n",},
    {0:"n",1:"n",2:"n",3:"n",4:"n",5:"n",6:"n",7:"n",8:"n",9:"n",},
    {0:"n",1:"n",2:"n",3:"n",4:"n",5:"n",6:"n",7:"n",8:"n",9:"n",},
    {0:"n",1:"n",2:"n",3:"n",4:"n",5:"n",6:"n",7:"n",8:"n",9:"n",},
    {0:"n",1:"n",2:"n",3:"n",4:"n",5:"n",6:"n",7:"n",8:"n",9:"n",},
    {0:"n",1:"n",2:"n",3:"n",4:"n",5:"n",6:"n",7:"n",8:"n",9:"n",},
    {0:"n",1:"n",2:"n",3:"n",4:"n",5:"n",6:"n",7:"n",8:"n",9:"n",},
    {0:"n",1:"n",2:"n",3:"n",4:"n",5:"n",6:"n",7:"n",8:"n",9:"n",},
    {0:"n",1:"n",2:"n",3:"n",4:"n",5:"n",6:"n",7:"n",8:"n",9:"n",},
    {0:"n",1:"n",2:"n",3:"n",4:"n",5:"n",6:"n",7:"n",8:"n",9:"n",},
    {0:"n",1:"n",2:"n",3:"n",4:"n",5:"n",6:"n",7:"n",8:"n",9:"n",},
    {0:"n",1:"n",2:"n",3:"n",4:"n",5:"n",6:"n",7:"n",8:"n",9:"n",},
    {0:"n",1:"n",2:"n",3:"n",4:"n",5:"n",6:"n",7:"n",8:"n",9:"n",},
    {0:"n",1:"n",2:"n",3:"n",4:"n",5:"n",6:"n",7:"n",8:"n",9:"n",},
    {0:"n",1:"n",2:"n",3:"n",4:"n",5:"n",6:"n",7:"n",8:"n",9:"n",},
    {0:"n",1:"n",2:"n",3:"n",4:"n",5:"n",6:"n",7:"n",8:"n",9:"n",},
    {0:"n",1:"n",2:"n",3:"n",4:"n",5:"n",6:"n",7:"n",8:"n",9:"n",},
    {0:"n",1:"n",2:"n",3:"n",4:"n",5:"n",6:"n",7:"n",8:"n",9:"n",},
    {0:"n",1:"n",2:"n",3:"n",4:"n",5:"n",6:"n",7:"n",8:"n",9:"n",},
];

function load(){
    document.getElementById("grid").innerHTML = "";
    for (let i1 = 0; i1 < 20; i1++) {
        for (let i2 = 0; i2 < 10; i2++) {
        document.getElementById("grid").innerHTML += `<div class="${currentstate[i1][i2]}"></div>`;
        }
    }
    i1 = 0;
    i2 = 0;
}

let tt2 = 2;
let tt1 = 1;
var tempstate1 = [];
let tempstate2 = currentstate[0];
function fall(){
    for (let tt1 = 1; tt1 < 20;) {
        console.log(tt1, tt2);
        tempstate1 = currentstate[tt1];
        currentstate[tt1] = tempstate2;
        if (tt2 < 20){
        tempstate2 = currentstate[tt2];
        currentstate[tt2] = tempstate1;
        }
        tt1+=2;
        tt2+=2;
    }
    tt2 = 2;
    tt1 = 1;
    
    //this is where the top row is generated

    // tempstate1 = currentstate[1];
    // currentstate[1] = currentstate[0];
    // tempstate2 = currentstate[2];
    // currentstate[2] = tempstate1;
    // tempstate1 =  currentstate[3];
    // currentstate[3] = tempstate2
    // currentstate[1][4] = "A";
    console.log(currentstate);
    load();
}
window.onload = function() {
    load();
};