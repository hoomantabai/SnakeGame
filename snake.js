var X = 105;
var Y = 105;
var radius = 5; 
var moveRate = radius*2;

var isLeft = true;
var isRight = false;
var isUp = false;
var isDown = false;

document.addEventListener('DOMContentLoaded', (event) => {
    setupCanvas();  
});


document.addEventListener('keydown', logKey);
    

function logKey(e) {
    console.log(e);
    if (e.keyCode == 37) {
        console.log("GoingLeft");
    }else if (e.keyCode == 38){
        console.log("GoingUp");
    }else if (e.keyCode == 39){
        console.log("GoingRight");
    }else if (e.keyCode == 40){
        console.log("GoingDown"); 
    }
}



function setupCanvas() {
    var c = document.getElementById("board");
    var width = c.width;
    var height = c.height;
    var ctx = c.getContext("2d");
    setInterval(preDraw, 300, ctx, width, height);
}

function preDraw(ctx, width, height) {
    ctx.clearRect(0, 0, width, height);
    draw(ctx);
}

function createCircle(ctx, point,r,color) {
    ctx.beginPath();
    ctx.arc(point.x, point.y, r, 0, 2*Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.stroke();
}

var snake = [];


function createSnake(ctx,x,y,r,n) {
    if (snake.length == 0){
        snake.push({x:x,y:y});
        for (i=1; i<n; i++) {
            snake.push({x:x+(r*i*2),y:y});
        }
    }else{
        for (i=n-1; i>0; i--){
            snake[i] = snake[i-1];
        }
        snake[0] = {x:x, y:y};
    }
    createCircle(ctx, snake[0], r, "red");
    for (i=1; i<n; i++) {
        createCircle(ctx,snake[i],r, "white");
    }
}

function draw(ctx) {
    if (X<10){
        createSnake(ctx,X,Y,radius,4);
        Y -=moveRate;     
    }else{
        createSnake(ctx,X,Y,radius,4);
        X -=moveRate;
    }
}


