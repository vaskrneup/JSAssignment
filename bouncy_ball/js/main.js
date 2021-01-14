const canvas = document.getElementById("bouncy-ball");
const ball = document.createElement("div");
const canvasHeight = 800;
const ballHeight = 90;

let fall = false;
let currentHeight = 0;
let s = 10;

ball.style.width = "90px";
ball.style.height = "90px";
ball.style.borderRadius = "50%";

ball.style.left = "205px";
ball.style.position = "absolute";
ball.style.backgroundColor = "black";

canvas.appendChild(ball)


function animateBall() {
    if (currentHeight <= 0 || currentHeight >= (canvasHeight - ballHeight)) {
        fall = !fall;
    }

    if (fall) {
        currentHeight += s;
    } else {
        currentHeight -= s;
    }

    ball.style.top = currentHeight + "px";

    requestAnimationFrame(animateBall);
}

animateBall();
