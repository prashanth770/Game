let boxes=document.querySelectorAll(".box");
let resetBut=document.querySelector("#resetBut");
let newGame=document.querySelector("#New-GameBut");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let truno=true;
const winpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const resetgame=()=>{
    truno=true;
    enabledBoxes();
    msg-msgContainer.classList.add("hide");

};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(truno){
            box.innerText="O"
            truno=false;
        }
        else{
            box.innerText="X"
            truno=true;
        }
        box.disabled=true;

        checkwinner();

    });
});

const disabledBoxes=()=>{
    for( let box of boxes){
        box.disabled=true;
    }
};
const enabledBoxes=()=>{
    for( let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const showWinner=(winner)=>{
    msg.innerText=`congratulation winner is ${winner}`;
    msg-msgContainer.classList.remove("hide");
    disabledBoxes();
};
const checkDraw = () => {
    for (let box of boxes) {
        if (box.innerText === "") {
            return false; 
        }
    }
    return true; 
};

const checkwinner=()=>{
    for(let pattern of winpattern){
        let pos1=boxes[pattern[0]].innerText
        let pos2=boxes[pattern[1]].innerText
        let pos3=boxes[pattern[2]].innerText
        if(pos1 !="" && pos2 !="" && pos3 !=""){
            if(pos1===pos2 && pos2===pos3){
                showWinner(pos1);
            }
        }
    }
    if (checkDraw()) {
        msg.innerText = "It's a Draw!";
        msgContainer.classList.remove("hide");
        disabledBoxes();
    }
};



newGame.addEventListener("click",resetgame);
resetBut.addEventListener("click",resetgame);