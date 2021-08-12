const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d');

c.beginPath();
c.arc(150, 150, 60, 0, Math.PI * 2, false);
c.strokeStyle = '5333ed';
c.stroke();

//Random number
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const colorsArray = [
   '#f2000e',
   '#ff7a0e',
   '#ffff0e',
   '#00cc0b',
   '#00ccff',
   '#0000d8',
   '#9700d8',
   '#ffffff',
   '#000000'
];

const circlesArray = [];

for (let i = 0; i < 1000; i += 1){
    let radius = 7;
    let x = Math.random() * (window.innerWidth - radius * 2) + radius;

    let y = Math.random() * (window.innerHeight -  radius * 2) + radius;
    let dx = (Math.random() - 0.5) * 2;
    let dy = (Math.random() - 0.5) * 2;
    
    const colorIndex = randomInteger(0, colorsArray.length - 1)

    circlesArray.push(new Circle(x, y, radius, dx, dy, colorsArray[colorIndex]));
}

function animate() {
    requestAnimationFrame(animate);

    c.clearRect(0, 0, window.innerWidth, window.innerHeight)
    for (let elem of circlesArray){
        elem.draw()
    }
}

animate();