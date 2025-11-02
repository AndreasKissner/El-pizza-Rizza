class Character extends MovableObject {
    walking_effect = new Audio('audi/walking_pepe.mp3');
    jump_effect = new Audio('audi/jump.mp3');
    hurt_effect = new Audio('audi/hurt_pepe.wav');
    /*      walking_effect = new Audio('');  */
    height = 200;
    width = 150;
    y = 230;
    x = 130;
    speed = 10;
    offset = {
        top: 80,
        left: 30,
        right: 40,
        bottom: 10
    };


    IMAGES_WALKING = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png'
    ];

    IMAGES_JUMPING = [
        /*     'img/2_character_pepe/3_jump/J-31.png',
            'img/2_character_pepe/3_jump/J-32.png',
            'img/2_character_pepe/3_jump/J-33.png', */
        'img/2_character_pepe/3_jump/J-34.png',
        'img/2_character_pepe/3_jump/J-35.png',
        'img/2_character_pepe/3_jump/J-36.png',
        'img/2_character_pepe/3_jump/J-37.png',
        'img/2_character_pepe/3_jump/J-38.png',
        'img/2_character_pepe/3_jump/J-39.png'
    ];


    IMAGES_DEAD = [
        'img/2_character_pepe/5_dead/D-51.png',
        'img/2_character_pepe/5_dead/D-52.png',
        'img/2_character_pepe/5_dead/D-53.png',
        'img/2_character_pepe/5_dead/D-54.png',
        'img/2_character_pepe/5_dead/D-55.png',
        'img/2_character_pepe/5_dead/D-56.png',
        'img/2_character_pepe/5_dead/D-57.png'
    ];

    IMAGES_HURT = [
        'img/2_character_pepe/4_hurt/H-41.png',
        'img/2_character_pepe/4_hurt/H-42.png',
        'img/2_character_pepe/4_hurt/H-43.png'
    ];

    world;

    constructor() {
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.applyGravity();
        this.animate();
    }


    animate() {
        setInterval(() => {
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.moveRight();
                this.otherDirection = false;
                this.walkingCharacter();
            }

            if (this.world.keyboard.LEFT && this.x > 0) {
                this.moveLeft();
                this.otherDirection = true; // bewegt sich langsam nach links
                this.walkingCharacter();
            }

            //JUMP HOCH
            if (this.world.keyboard.SPACE && !this.isAboveGround()) {
                this.jump();
                this.jump_effect.play();
            }

            this.world.camera_x = -this.x + 130;
        }, 1000 / 60);


        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);

            } else if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT);
                this.hurt_effect.play();

            } else if (this.isAboveGround()) {
                //Jump Animation
                this.playAnimation(this.IMAGES_JUMPING);

            } else {

                if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                    //Walk Animation
                    this.playAnimation(this.IMAGES_WALKING);
                }
            }
        }, 50);
    }

}