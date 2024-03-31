let userCount = 0;
let compCount = 0;

let choice = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let compwins = document.querySelector("#compWin");
let userwins = document.querySelector("#userWin");

const drawGame = () => {
    msg.innerText = `The Game is Drawn`;
    msg.style.background = "#525B76";
};

const compGen = () => {
    let option = ["rock", "paper","scissor"]; // We can't generate strings but we can make an array of strings and generate random indices
    let compChoice = Math.floor(Math.random() * 3);
    return option[compChoice];
};

const checkWin = (user,comp, userChoice) => {
    if(userChoice === comp)
    {
    msg.style.background = "#525B76";
    msg.innerText = `The Game is Drawn`;
    }
    else if(user)
    {   
        userCount++;
        msg.innerText = `Congrats You Won! ${userChoice} beats ${comp}`;
        msg.style.background = "green";
        userwins.innerText = userCount;
    }
    else{
        compCount++;
        msg.innerText = `Sorry You Lose! ${comp} beats ${userChoice}`;
        msg.style.background = "red"; 
        compwins.innerText = compCount;
    }
};
const playGame = (userChoice) => {
    let comp = compGen();
    let user = true;
    if(userChoice === comp)
    {
        drawGame();
    }
    else if(userChoice === "rock")
    {   // paper , scissor
        user = comp == "scissor" ? true : false;
    }
    else if(userChoice === "paper")
    {   // scissor, rock
        user = comp == "rock" ? true : false;
    }
    else{
        // rock, paper
        user = comp == "paper" ? true : false;
    }
    checkWin(user,comp,userChoice);

};
choice.forEach((box) => {
    box.addEventListener("click", ()=> {
        let userChoice = box.getAttribute("id");
        // console.log(userChoice);
        playGame(userChoice);
    })
});
