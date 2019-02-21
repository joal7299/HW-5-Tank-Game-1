const Phaser = require('phaser');
// const Phaser = require('Player');

class Enemy{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.radius = 30;
        this.forward = 0;
        this.isActive = false;

        this.moveSpeed = 75;
        this.enemyRot = 0;
        this.rotSpeed = 1;

        this.activeTime = 0;
    
        //enemy shape
        this.enemyGeo = [
            new Phaser.Geom.Point(0, 0),
            new Phaser.Geom.Point(-5, 10),
            new Phaser.Geom.Point(-7, 0),
            new Phaser.Geom.Point(-13, -2),
            new Phaser.Geom.Point(-12, -5),
            new Phaser.Geom.Point(-6, -5),
            new Phaser.Geom.Point(-5, -12),
            new Phaser.Geom.Point(5, -12),
            new Phaser.Geom.Point(6, -5),
            new Phaser.Geom.Point(12, -5),
            new Phaser.Geom.Point(13, -2),
            new Phaser.Geom.Point(7, 0),
            new Phaser.Geom.Point(5, 10),
            new Phaser.Geom.Point(0, 0),
            
          ];

    }

    activate(x, y) {
        this.x = x;
        this.y = y;
        // this.forward = forward;
        this.isActive = true;
        this.activeTime = 2000;
      }
    
      deactivate() {
        this.isActive = false;
      }



    // setX(newX) {
    //     this.x = newX;
    // }
    
    // setY(newY) {
    //     this.y = newY;
    // }


    update(deltaTime) {
        //enemy movement
        // if(this.isActive){
        //     const forwardX = -Math.sin(this.enemyRot);
        //     const forwardY = Math.cos(this.enemyRot);
        //     this.x += this.moveSpeed * forwardX * deltaTime / 1000;
        //     this.y += this.moveSpeed * forwardY * deltaTime / 1000;

        //     this.activeTime -= deltaTime;
        //     if (this.activeTime < 0) {
        //         this.deactivate();
        //     }
        // }
      }


    draw(graphics) {
        // render player base
        if(this.isActive){
            graphics.save();
            graphics.translate(this.x, this.y);
            graphics.strokePoints(this.enemyGeo);

            graphics.restore();
        }
    }
    
}
module.exports = Enemy;