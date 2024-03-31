let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msg = document.querySelector(".msg-container");
let winmsg = document.querySelector("#msg");
let drawContainer = document.querySelector(".draw-container");
let drawMsg = document.querySelector("#draw-msg");
let newGameDraw = document.querySelector("#new-btn-draw");

let turn0 = true; //playerX player0

const winPatterns = [
    [0, 1 ,2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
resetGame = () => {
    true0 = true;
    enableBoxes();
    msg.classList.add("hide");
};
resetGamedraw = () =>{
    true0 = true;
    enableBoxes();
    drawContainer.classList.add("hidden");
}

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if(turn0)
        { 
            box.innerText = "0"; //player0
            box.style.color = "red";
            turn0 = false;
            box.disabled = true;
        }
        else
        {
            box.innerText = "X"; //playerX
            box.style.color = "black";
            turn0 = true;
            box.disabled = true;
        }
        checkWinner();
    });
});

const disableboxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};
const drawGame = () => {
    drawMsg.innerText = `The Game is Drawn! Better Luck next time`;
    drawContainer.classList.remove("hidden");
};
const showWinner = (winner) => {
    winmsg.innerText = `Congratulations! Winner is ${winner}`;
    msg.classList.remove("hide");
};
let clickCount = 0;
const checkWinner = () => {
clickCount++;
for(let pos of winPatterns)
{   
    let posVal1 = boxes[pos[0]].innerText;
    let posVal2 = boxes[pos[1]].innerText;
    let posVal3 = boxes[pos[2]].innerText;

    if(posVal1 != "" && posVal2!= "" && posVal3 != "")
    {   
        if(posVal1 === posVal2 && posVal2 === posVal3)
        {
            showWinner(posVal1);
            disableboxes();
        }  
    }   
}
if(clickCount === boxes.length)
{
    drawGame();
}
};

newGamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);
newGameDraw.addEventListener("click", resetGamedraw);