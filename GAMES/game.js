let canvas = document.createElement('canvas');
let ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;
document.body.appendChild(canvas);
 
let x = 50; // start position x
let y = 50; // start position y
let dx = 0; // speed x
let dy = 0; // speed y
let radius = 20; // radius of the circle
 
// variablenen cirkel 2:
let x2 = 100; // start locatie
let y2 = 100;
let snelheid = 5; // sprongen van de bal
let radius2 = 10; // grote van de bal
 
let x3 = 200; // start position x
let y3 = 200; // start position y
let dx3 = 0; // speed x
let dy3 = 0; // speed y
let radius3 = 20; // radius of the circle

let x4 = 500; // start position x
let y4 = 200; // start position y
let dx4 = 0; // speed x
let dy4 = 0; // speed y
let radius4 = 20; // radius of the circle
 
function startBewegen() {
    dx = 2;
    dy = 2;
    dy3 = 1;
    dx3 = 1;
    dy4 = 3;
    dx4 = 3;
}
 
document.getElementById('startButton').addEventListener('click', startBewegen);
 
document.addEventListener('keydown', function(event){
    if (event.key === 'a')
    {x2 -= snelheid; // x2 = x2 - snelheid
    if (x2+radius2 < 0 ) {x2 = canvas.width - radius2}
} else if (event.key === 'd') {
    x2 += snelheid;
    if (x2-radius2 > canvas.width) {x2 = radius2}
}
    if (event.key === 'w'){
        y2 -= snelheid;
        if (y2 < radius2) { y2 = radius2}
    }
    else if (event.key === 's') {
        y2 += snelheid;
        if (y2 > canvas.height-radius2) { y2 = canvas.height-radius2}
}
});
 
function drawCircle() {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, true);
 
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop(0, 'red');
    gradient.addColorStop(1 / 6, 'orange');
    gradient.addColorStop(2 / 6, 'yellow');
    gradient.addColorStop(3 / 6, 'green');
    gradient.addColorStop(4 / 6, 'blue');
    gradient.addColorStop(5 / 6, 'indigo');
    gradient.addColorStop(1, 'violet');
 
    ctx.fillStyle = gradient;
    ctx.fill();
    ctx.closePath();
}
function drawCircle2() {
    ctx.beginPath();
    ctx.arc(x2, y2, radius2, 0, Math.PI * 2, true);
 
    const gradient2 = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradient2.addColorStop(0, 'red');
    gradient2.addColorStop(1 / 6, 'orange');
    gradient2.addColorStop(2 / 6, 'yellow');
    gradient2.addColorStop(3 / 6, 'green');
    gradient2.addColorStop(4 / 6, 'blue');
    gradient2.addColorStop(5 / 6, 'indigo');
    gradient2.addColorStop(1, 'violet');
 
    ctx.fillStyle = gradient2;
    ctx.fill();
    ctx.closePath();
}
 
function drawCircle3() {
    ctx.beginPath();
    ctx.arc(x3, y3, radius3, 0, Math.PI * 2, true);
 
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop(0, 'red');
    gradient.addColorStop(1 / 6, 'orange');
    gradient.addColorStop(2 / 6, 'yellow');
    gradient.addColorStop(3 / 6, 'green');
    gradient.addColorStop(4 / 6, 'blue');
    gradient.addColorStop(5 / 6, 'indigo');
    gradient.addColorStop(1, 'violet');
 
    ctx.fillStyle = gradient;
    ctx.fill();
    ctx.closePath();
}
function drawCircle4() {
    ctx.beginPath();
    ctx.arc(x4, y4, radius4, 0, Math.PI * 2, true);
 
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop(0, 'red');
    gradient.addColorStop(1 / 6, 'orange');
    gradient.addColorStop(2 / 6, 'yellow');
    gradient.addColorStop(3 / 6, 'green');
    gradient.addColorStop(4 / 6, 'blue');
    gradient.addColorStop(5 / 6, 'indigo');
    gradient.addColorStop(1, 'violet');
 
    ctx.fillStyle = gradient;
    ctx.fill();
    ctx.closePath();
}
 
 
 
 
function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#FEFEFE";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
 
    drawCircle();
    drawCircle2();
    drawCircle3();
    drawCircle4();
 
    x += dx;
    y += dy;
 
    if (x + dx > canvas.width - radius || x + dx < radius) {
        dx = -dx;
    }
    if (y + dy > canvas.height - radius || y + dy < radius) {
        dy = -dy;
    }
    x3 += dx3;
    y3 += dy3;
 
    if (x3 + dx3 > canvas.width - radius || x3 + dx3 < radius) {
        dx3 = -dx3;
    }
    if (y3 + dy3 > canvas.height - radius || y3 + dy3 < radius) {
        dy3 = -dy3;
    }
    x4 += dx4;
    y4 += dy4;
 
    if (x4 + dx4 > canvas.width - radius || x4 + dx4 < radius) {
        dx4 = -dx4;
    }
    if (y4 + dy4 > canvas.height - radius || y4 + dy4 < radius) {
        dy4 = -dy4;
    }
 
 
    requestAnimationFrame(update);
}
 
update();