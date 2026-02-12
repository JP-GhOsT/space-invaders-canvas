import { PATH_SPACESHIP_IMAGE,
            PATH_ENGINE_IMAGE,
            PATH_ENGINE_SPRITES,
            INICIAL_FRAMES
 } from "../utils/constants.js";
 import Projectile from "./Projectile.js";

class Player{
    constructor(canvasWidth, canvasHeight){
        this.width = 48 * 2;
        this.height = 48 * 2;
        this.velocity = 6;


        this.position = {
           x: canvasWidth/2 - this.width/2,
           y: canvasHeight -this.height - 30,
        };

        this.image = this.getImage(PATH_SPACESHIP_IMAGE);
        this.engineimage = this.getImage(PATH_ENGINE_IMAGE);
        this.engineSprites = this.getImage(PATH_ENGINE_SPRITES);

        this.sx = 0;
        this.framesCounter = INICIAL_FRAMES;
    }

    getImage(path){
        const image = new Image();
        image.src = path;
        return image;
    }

    moveLeft(){
        this.position.x -= this.velocity;
    }


    moveRight(){
        this.position.x += this.velocity;
    }


    draw(ctx){
        ctx.drawImage(
            this.image, 
            this.position.x, 
            this.position.y, 
            this.width, 
            this.height
        );

        ctx.drawImage(
            this.engineSprites, 
            this.sx,
            0, 
            48,
            48,
            this.position.x, 
            this.position.y + 10, 
            this.width, 
            this.height
        );

        ctx.drawImage(
            this.engineimage, 
            this.position.x, 
            this.position.y + 8, 
            this.width, 
            this.height
        );

        this.update();
    }

    update(){
        if(this.framesCounter === 0){
            if(this.sx === 48 * 3){
                this.sx = 0;
            } else {
                this.sx += 48;
            }

            this.framesCounter = INICIAL_FRAMES;
        }

        this.framesCounter--;
    }

    shoot(projectiles) {
        const bullet = new Projectile(
            {
                x: this.position.x + this.width/2 - 1,
                y: this.position.y + 2
            },
            -10
        );

        projectiles.push(bullet);
    }
}

export default Player;