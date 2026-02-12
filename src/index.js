import Player from "./classes/Player.js";
import Projectile from "./classes/Projectile.js";
import Invader from "./classes/Invader.js";
import Grid from "./classes/Grid.js";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

ctx.imageSmoothingEnabled = false;

const player = new Player(canvas.width, canvas.height);
const playerProjectiles = [];
const invaderProjectiles = [];
const grid = new Grid(3, 6);

const keys = {
    left: false,
    right: false,
    shoot: {
        pressed: false,
        released: true
    }
}

const drawProjectiles = () => {
    const projectiles = [...playerProjectiles, ...invaderProjectiles];

    projectiles.forEach((projectile) => {
        projectile.draw(ctx);
        projectile.update();
    });
}

const clearProjectiles = () => {
    playerProjectiles.forEach((projectile, index) => {
        if (projectile.position.y <= 0) {
            playerProjectiles.splice(index, 1);
        }
    });
}

const checkShootInvaders = () => {
    grid.invaders.forEach((invader, Invaderindex) => {
        playerProjectiles.some((projectile, projectileIndex) => {
            if (invader.hit(projectile)) {
                grid.invaders.splice(Invaderindex, 1);
                playerProjectiles.splice(projectileIndex, 1);
                return true;
            }
        });
    });
}

const gameLoop = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawProjectiles();
    clearProjectiles();

    checkShootInvaders();

    grid.update();
    grid.draw(ctx);

    ctx.save();

    ctx.translate(
        player.position.x + player.width / 2,
        player.position.y + player.height / 2
    );

    if (keys.shoot.pressed && keys.shoot.released) {
        player.shoot(playerProjectiles);
        keys.shoot.released = false;
    }

    if (keys.left && player.position.x >= 0) {
        player.moveLeft();
        ctx.rotate(-0.15);
    }

    if (keys.right && player.position.x <= canvas.width - player.width) {
        player.moveRight();
        ctx.rotate(0.15);
    }

    ctx.translate(
            -player.position.x - player.width / 2, 
            -player.position.y - player.height / 2
        );

    player.draw(ctx);

    ctx.restore();

    requestAnimationFrame(gameLoop);
}

addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();
    if (key === "a") {
        keys.left = true;
    }

    if (key === "d") {
        keys.right = true;
    }

    if (key === " "){
        keys.shoot.pressed = true;
    }
});

addEventListener("keyup", (event) => {
    const key = event.key.toLowerCase();
    if (key === "a") {
        keys.left = false;
    }
    if (key === "d") {
        keys.right = false;
    }
    if (key === " ") {
        keys.shoot.pressed = false;
        keys.shoot.released = true;
    }
});

setInterval(() => {
    const invader = grid.getRandomInvader();
    
    if (invader) {
        invader.shoot(invaderProjectiles);
    }
},1000);

gameLoop();