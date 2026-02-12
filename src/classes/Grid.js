import Invader from "./Invader.js";

class Grid {
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;

        this.direction = "right";
        this.movedown = false;
        
        this.invadersVelocity = 1;
        this.invaders = this.init();
    }

    init(){
        const array = [];

        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                const invader = new Invader(
                {
                    x: col * 50 + 20, 
                    y: row * 37 + 20
                }, 
                    this.invadersVelocity
                );
            
                array.push(invader);
            }
        }
        return array;
    }

    draw(ctx) {
        this.invaders.forEach((invader) => {invader.draw(ctx);});
    }

    update(){
        if (this.reachedRightBorder()){
            this.direction = "left";
            this.movedown = true;
        } else if (this.reachedLeftBorder()){
            this.direction = "right";
            this.movedown = true;
        }

        if(this.movedown){
            this.invaders.forEach((invader) => {
                invader.moveDown();
                invader.incrementvelocity(0.1);
                this.invadersVelocity = invader.velocity;
            });
        }

        this.invaders.forEach((invader) => {
            if (this.direction === "right") {
                invader.moveRight();
            } 
            if (this.direction === "left") {
                invader.moveLeft();
            }
        });

        this.movedown = false;
    }

    reachedRightBorder(){
        return this.invaders.some(
            (invader) => invader.position.x + invader.width >= window.innerWidth
        );
    }

    reachedLeftBorder(){
        return this.invaders.some(
            (invader) => invader.position.x <= 0
        );
    }

    getRandomInvader(){
        const index = Math.floor(Math.random() * this.invaders.length);
        return this.invaders[index];
    }
}
export default Grid;