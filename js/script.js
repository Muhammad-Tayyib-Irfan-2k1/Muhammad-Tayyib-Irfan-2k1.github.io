console.log("Start")

let play = new Audio("./Resources/click.wav")
let win = new Audio("./Resources/won.mp3")
let reset = new Audio("./Resources/reset.wav")
let turn = "X"
let gameWon = false

// change turn
function changeturn(){
    return turn==="X" ? "O" : "X";
}

// win checker
function checkwin(){
    winCases = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    let box = document.getElementsByClassName("box");
    winCases.forEach(winCase => {
        if((box[winCase[0]].innerText === box[winCase[1]].innerText) && (box[winCase[1]].innerText === box[winCase[2]].innerText) && box[winCase[0]].innerText!==""){
            console.log("won check");
            document.querySelector('.turn').innerText = "Player '" + box[winCase[0]].innerText + "' Won!"
            console.log("done");
            gameWon = true;
            win.play();
        }
    })
}

// play turn
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    element.addEventListener('click', ()=>{
        console.log("clicked");
        play.play();
        if(element.innerText === "" && !gameWon){
            element.innerText = turn
            turn = changeturn()
            document.querySelector(".turn").innerText = "Turn of " + turn
            checkwin();
        }
    });
});

// reset
document.querySelector("#btn").addEventListener('click', ()=>{
    Array.from(boxes).forEach(element => {
        element.innerText = ""
        turn = "X"
        document.querySelector(".turn").innerText = "Turn on " + turn
        gameWon = false;
        reset.play()
    });
})