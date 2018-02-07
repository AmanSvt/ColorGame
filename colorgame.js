var numSquare =6;
var colors= generateRandomColor(numSquare);
var square = document.querySelectorAll(".square");
var colorDisplay=document.querySelector("#colorDisplay");
var messageDisplay= document.querySelector("#message");
var h1= document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");
var pickedColor = pickColor();


easyBtn.addEventListener("click", function(){
            easyBtn.classList.add("selected");
            hardBtn.classList.remove("selected");
    numSquare=3;
    colors=generateRandomColor(numSquare);
    pickedColor=pickColor();
    colorDisplay.textContent= pickedColor;
    for(var i=0;i<square.length ;i++){
        if(colors[i]){
           square[i].style.backgroundColor= colors[i];
           }else{
           square[i].style.display="none";
           }
           }
    });
   
hardBtn.addEventListener("click", function(){
            easyBtn.classList.remove("selected");
            hardBtn.classList.add("selected");
    numSquare=6;
    colors=generateRandomColor(numSquare);
    pickedColor=pickColor();
    colorDisplay.textContent= pickedColor;
    for(var i=0;i<square.length ;i++){
     square[i].style.backgroundColor= colors[i];
     square[i].style.display="block";
    }
   });

resetButton.addEventListener("click", function(){
    colors = generateRandomColor(numSquare);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    this.textContent="New Colors";
    messageDisplay.textContent="";
    for(var i=0;i<square.length;i++){
        square[i].style.backgroundColor= colors[i];
    }
   h1.style.backgroundColor="steelblue";  
    resetButton.textContent="New colors";
});

colorDisplay.textContent= pickedColor;

for(var i=0;i<square.length;i++){
    square[i].style.backgroundColor = colors[i];
    
    square[i].addEventListener("click", function(){
    var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor){
            messageDisplay.textContent="Correct";
            resetButton.textContent="Play Again?";
            changeColor(clickedColor);
            h1.style.backgroundColor = clickedColor ;
            
        }
        else{
            messageDisplay.textContent="Try Again";
            this.style.backgroundColor="#232323";        }
    });
}
function changeColor(color){
    for(var i=0;i<square.length ;i++){
        square[i].style.backgroundColor =color;
    }
}
function pickColor(){
var random= Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColor(num){
    var arr=[];
    for(var i=0;i<num;i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    var r= Math.floor(Math.random() * 256 );
    var g= Math.floor(Math.random() * 256 );
    var b= Math.floor(Math.random() * 256 );
   return "rgb(" + r + ", " + g + ", " + b + ")";
    
}