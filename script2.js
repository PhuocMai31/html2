let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");
let score = 0;
function Chu(){
    ctx.font = "20px Georgia";
    ctx.fillText("Super", 10, 50);

    ctx.font = "30px Verdana";
// Tạo dải màu
    var gradient = ctx.createLinearGradient(0, 0, c.width, 0);
    gradient.addColorStop("0", "yellow");
    gradient.addColorStop("0.5", "red");
    gradient.addColorStop("1.0", "red");
// Đổ dải màu lên chữ
    ctx.fillStyle = gradient;
    ctx.fillText("Mario with Mushroom", 10, 90);
}

let img = new Image();
img.src = "images/Untitled.png"

function draw_background() {
    ctx.drawImage(img, 0, 0);
}

// 612*306

class Mario {
    constructor(x, y, a, b) {
        this.a = a;
        this.b = b;
        this.x = x;
        this.y = y;
    }

    draw_mario() {
        let img = new Image();
        img.src = "images/5.png"
        ctx.drawImage(img, mario.x, mario.y, mario.a, mario.b);
    }
}

class Rock {
    constructor(x, y, a, b) {
        this.x = x;
        this.y = y;
        this.a = a;
        this.b = b;
    }

    draw_rock() {
        let img = new Image();
        img.src = "images/4.png"
        ctx.drawImage(img, this.x, this.y, this.a, this.b);
    }

    move() {
        if (this.y > 306) {
            this.y = 50
        } else {
            this.y += 5
        }
    }

     gameOver(mario) {
        let distX = (mario.x + (mario.a / 3)) - (this.x + (this.a) / 3);
        if (distX < 0)
            distX = -distX;

        let distW = (mario.a + this.a) / 3;

        let distY = (mario.y + (mario.b / 3)) - (this.y + (this.b) / 3);
        if (distY < 0)
            distY = -distY;

        let distH = (mario.b + this.b) / 3;

        if (distX <= distW && distY <= distH) {
            alert('game over');
            clearInterval(runInterval);
        }
    }
}

let mario = new Mario(100, 200, 50, 50);



let rocks = [];

function createRock() {

    for (let i = 0; i < 10; i++) {
        let rock = new Rock(Math.floor(Math.random() * 500) , 10  , 50, 50);
        rocks.push(rock)
    }
}

createRock();

let i = 0;
function showRock() {

    if (i < 10) {

        for (let j = i; j < i + 4; j++) {
            if (j < rocks.length) {
                rocks[j].draw_rock();
                rocks[j].move();
                rocks[j].gameOver(mario)
            }
        }
        if (rocks[i].y > 300) {
            i++;
        }
    } else {
        console.log('3432432')
        i = 0;
        rocks = []
        createRock();
    }
}

function moveall() {
    draw_background();
    mario.draw_mario();
    showRock();
    scoreRecord();
    Chu()
}


function left() {
    mario.x -= 50;
}

function right() {
    mario.x += 50;
}

function jump() {
    mario.y -= 50;
    setTimeout(function () {
        mario.y = 200;
    }, 1000);
}

document.addEventListener('keydown', function (e) {
    if (e.keyCode == 32)
        jump()
})
document.addEventListener('keydown', function (e) {
    if (e.keyCode == 37)
        left()
})
document.addEventListener('keydown', function (e) {
    if (e.keyCode == 39)
        right()
})
function scoreRecord() {

    score = score + 1;

    document.getElementById("score").innerHTML = score;
}





let runInterval = setInterval(() => {
    moveall()
}, 40)
