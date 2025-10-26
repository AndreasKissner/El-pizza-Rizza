class MiniChicken extends MovableObject {
    x = 0;
    y = 380;
    height = 40;
    width = 40;
    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
    ];

    
    constructor(x) {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.x = x;
        this.speed = 0.35,
        this.animate();
    }

    animate() {
        this.moveLeft();


        setInterval(() => {
          this.playAnimation(this.IMAGES_WALKING)
        }, 200);
    }
}

