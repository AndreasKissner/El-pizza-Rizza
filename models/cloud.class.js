class Cloud extends MovableObject {
    y = 20;
    width = 500;
    height = 250;



    constructor(x) {
        super().loadImage('img/5_background/layers/4_clouds/2.png');
        this.x = x;
        this.animated();
    }

    animated() {
        this.moveLeft();
    }



}