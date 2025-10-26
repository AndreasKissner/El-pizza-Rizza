class Chicken extends MovableObject {
    x = 0;
    y = 370;
    height = 50;
    width  =50;
    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
    ];

    constructor(x) {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.x = x;
        this.speed = 1 + Math.random() * 0.25;
        this.animate();
    }

    animate() {
        this.moveLeft();


        setInterval(() => {
          this.playAnimation(this.IMAGES_WALKING)
        }, 200);
    }
}