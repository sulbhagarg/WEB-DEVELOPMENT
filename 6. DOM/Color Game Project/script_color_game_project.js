var numSquares = 6;
var colors;
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("messageDisplay");
var h1 = document.querySelector("h1");
var resetBtn = document.getElementById("reset");
var modeBtn = document.querySelectorAll(".mode");

init();

function init(){ 
    setupModeBtn();
    setUpSquares();
    reset();
}

function setUpSquares(){
    for(var i=0; i<squares.length;i++){
        //add click listeners to squares
        squares[i].addEventListener("click", function(){
            var clickedColor = this.style.background;
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                changeColors(clickedColor);
                h1.style.background = clickedColor;
                resetBtn.textContent = "Play Again?";
            }
            else{
                this.style.background = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function setupModeBtn(){
    for(var i=0; i<modeBtn.length; i++){
        modeBtn[i].addEventListener("click", function(){
            modeBtn[0].classList.remove("selected");
            modeBtn[1].classList.remove("selected");
            this.classList.add("selected");
    
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }
}

function reset(){
    colors = generarateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent=pickedColor;
    for(var i=0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
    h1.style.background = "steelblue";
    resetBtn.textContent = "New Colors";
    messageDisplay.textContent = "";
}

resetBtn.addEventListener("click", function(){
    reset();
});

function changeColors(color){
    for(var i=0; i<squares.length;i++){
        squares[i].style.background = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generarateRandomColors(num){
    var arr = [];
    for(var i=0; i<num; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}