class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    isHit = false;
    statusBar = new StatusBar();
    statusBarBottle = new StatusBarBottle();
    statusBarCoins = new StatusBarCoins();
    throwableObjects = [];

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    setWorld() {
        this.character.world = this;
        
    }

    run() {
        setInterval(() => {

          this.checkCollision();
          this.checkThrowObjects();
        }, 100);
    }

    checkThrowObjects(){
        if(this.keyboard.D){
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 95);
            this.throwableObjects.push(bottle);
        }
    }

    checkCollision(){
          this.level.enemies.forEach((enemy) => {
                if (this.character.isColliding(enemy)) {
                    this.character.hit();
                    this.statusBar.setPercentage(this.character.energy);
                }
            });
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // ===== Welt zeichnen =====
        this.ctx.save(); // Zustand merken
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundsObjects);
        this.addObjectsToMap(this.level.platform);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObjects); 
        this.addToMap(this.character);
        this.ctx.restore(); // Kamera zurücksetzen

        // ===== HUD / Statusbar =====
        this.addToMap(this.statusBar);
        this.addToMap(this.statusBarBottle);
        this.addToMap(this.statusBarCoins);

  this.ctx.font = "20px Arial";
    this.ctx.fillStyle = "yellow";
    this.ctx.fillText(`x: ${Math.round(this.character.x)}  y: ${Math.round(this.character.y)}`, 20, 40);


        //DRaw wird immer wieder Aufgerufen
        requestAnimationFrame(() => {
            this.draw();
        });
        // Oder so:   let self = this;
        //requestAnimationFrame(function () {
        //    self.draw();
        //    });
    }


    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        })
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }

    // Oder so:   let self = this;
    //requestAnimationFrame(function () {
    //    self.draw();
    //    });
     

} 