class MovableObject {
    x = 120;
    y = 280;
    height = 150;
    width = 100;
    imageCache = {};
    currentImage = 0;
    speed = 0.15;

    otherDirection = false;


    // loadImage('img/test.png')
    loadImage(path) {
        this.img = new Image(); // this.img = document.getElementbyId("image") <img id = "image" src>
        this.img.src = path;
    }


    /**
     * 
     * @param {Arry} arr -['img/image1.png', 'img/image2.png' usw.]
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });

    }
    playAnimation(images) {
        let i = this.currentImage % this.IMAGES_WALKING.length;// let i = 0 % 6; 0, Rest 0;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    moveRight() {
        console.log("Moving right");
    }


    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;  // bewegt sich langsam nach links
            if (this.x + this.width < 0) {
                this.x = 2400; // springt wieder nach rechts (Canvas-Breite)
            }
        }, 1000 / 60);
    }

}