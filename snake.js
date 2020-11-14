document.addEventListener('DOMContentLoaded', (event) => {
    var c = document.getElementById("board");
    var ctx = c.getContext("2d");
    setInterval(draw, 1000, ctx);
});

function circle(ctx,x,y,r,color) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2*Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.stroke();
}

function snake(ctx,x,y,r,n) {
    circle(ctx,x,y,r, "red");
    for (i=1; i<n; i++) {
        circle(ctx,x+(r*i*2),y,r, "white");
    }
}
var x = 100;
function draw(ctx) {
    ctx.clearRect(0,0,500,500);
    snake(ctx,x,100,10,4);
    x -=5;   
}