const pointSize = +prompt("Plot Point Size, if invalid provided 9 will be used") || 9;

const points = [
    {x: 10, y: 20},
    {x: 40, y: 40},
    {x: 60, y: 20},
];

const canvas = document.getElementById("graph");

function handlePointRemoval(e) {
    canvas.removeChild(e.target);
}


points.forEach(function (value) {
    const ball = document.createElement("div");
    ball.style.width = pointSize + "px";
    ball.style.height = pointSize + "px";
    ball.style.backgroundColor = "lightblue";
    ball.style.borderRadius = "50%";
    ball.style.position = "absolute";
    ball.style.left = (value.x * pointSize) + "px";
    ball.style.top = (value.y * pointSize) + "px";

    canvas.appendChild(ball);

    ball.addEventListener("click", handlePointRemoval);
    ball.addEventListener("mouseenter", (e) => {
        ball.style.backgroundColor = "red";
    });
    ball.addEventListener("mouseleave", (e) => {
        ball.style.backgroundColor = "lightblue";
    });

    return ball;
});
