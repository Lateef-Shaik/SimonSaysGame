
let gameSeq=[];
let userSeq=[];
let started=false;
let level=0;
let score =0;
let btns=["red","yellow","green","blue"];
let h2=document.querySelector('h2');
function disableButtons() {
    let allbtns = document.querySelectorAll(".btn");
    for (let btn of allbtns) {
        btn.classList.add("disabled");
        btn.removeEventListener("click", btnpress); // Remove click event listener
    }
}

// Function to enable all buttons
function enableButtons() {
    let allbtns = document.querySelectorAll(".btn");
    for (let btn of allbtns) {
        btn.classList.remove("disabled");
        btn.addEventListener("click", btnpress); // Add click event listener
    }
}
document.addEventListener("keypress",function(event){
    if(started==false){
        console.log("Game Started");
        started=true;
        enableButtons();
        levelup();
    }
    // let btn1=document.querySelector('.red');
    // let h2=document.querySelector('h2');
    // h2.innerText="Level 1";
    // btn1.styel.backgroundcolor=white;
});
function levelup(){
    userSeq=[];//reset
level++;
h2.innerText=`Level ${level}`;
//random button
let ranIdx=Math.floor(Math.random()*4);
let randomcolor=btns[ranIdx];
let randombtn=document.querySelector(`.${randomcolor}`);
gameSeq.push(randomcolor);
console.log(gameSeq);
btnflash(randombtn);
};
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}
function checkAns(idx){
    // console.log(`current level ${level}`);
    if(gameSeq[idx]===userSeq[idx]){
        // let body=document.querySelector("body");
        // body.style.backgroundColor="pink";
        // h2.innerText=`Game Over your score is ${score}`;
        if(userSeq.length==gameSeq.length){
           setTimeout(levelup,500);
        }
        // console.log("same");
    }
    else{
        console.log(h2.innerHTML=`Game Over your score is <u> ${level*10} </u>press any key to restart`);
        document.querySelector('body').style.backgroundColor="black";
       setTimeout( function(){document.querySelector('body').style.backgroundColor="white"},150);
       disableButtons();
        reset();
    }
}
function btnpress(){
    // console.log(this);
    let btn=this;
    userflash(btn);
    let usercolor=btn.getAttribute("id");
    userSeq.push(usercolor);
console.log(userSeq);
checkAns(userSeq.length-1);
}
// let allbtns=document.querySelectorAll(".btn");
// for(btn of allbtns){
//     btn.addEventListener("click",btnpress);
// }
// Initially disable all buttons
disableButtons();
function reset(){
    gameSeq=[];
    userSeq=[];
    score=0;
    level=0;
    started=false;

}