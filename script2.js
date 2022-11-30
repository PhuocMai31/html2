let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");
let score = 0;


let img = new Image();
img.src = "images/background.jpg"
 function draw_background() {
    ctx.drawImage(img, 0, 0);
};
// 612*306

class Dino {
    constructor(x, y, a, b) {
        this.a = a;
        this.b = b;
        this.x = x;
        this.y = y;
    }
    draw_dino() {
        let img = new Image();
        img.src = "images/dino.png"
        ctx.drawImage(img, dino.x, dino.y, dino.a, dino.b);
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
        img.src = "images/stone.png"
        ctx.drawImage(img, rock.x, rock.y, rock.a, rock.b);
    }
}

let dino = new Dino(100, 250, 50, 50);

 let rock = new Rock(Math.random()*500, 50, 50, 50);
 let rock1 = new Rock(Math.random()*500, 50, 50, 50);
 let rock2 = new Rock(Math.random()*500, 50, 50, 50);




function left() {
    dino.x -= 50;
}
function right() {
    dino.x += 50;
}
function jump() {

    dino.y -= 50;
    setTimeout(function () {
        dino.y = 250;
    }, 520);
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



function move() {
    if(rock.y == 306){
        rock.y = 50
    }

    rock.y++;
    rock1.y++;
    rock2.y++;
    draw_background();
    dino.draw_dino();
    rock.draw_rock();
    rock1.draw_rock();
    rock2.draw_rock();
    // scoreRecord();
    // gameOver();



}

let runInterval = setInterval(move,10)
// function gameOver() {
//     if (dino.x == rock.x && dino.y == rock.y) {
//         alert("Game over!!! Your score: " + score)
//         clearInterval(runInterval);
//     }
//
// }
// //
// function scoreRecord() {
//     if (dino.x == rock.x) {
//         score = score + 1;
//     }
//     document.getElementById("score").innerHTML = score;
// }

// function levelUp() {
//     if (score % 10 ==0) {
//         clearInterval(runInterval);
//         runInterval = setInterval(move, 10)
//     }
// }


// move()









