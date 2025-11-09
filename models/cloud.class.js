class Cloud extends MovableObject {
    y = 20;
    width = 500;
    height = 250;

    constructor(x) {
        super();
        this.loadImage('img/5_background/layers/4_clouds/2.png');
        this.x = x;
        this.speed = 0.15; // Testgeschwindigkeit
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
    }
}
