class Bottle extends MovableObject {

    offset = {

    }

      constructor(x, y) {
        super().loadImage('img/6_salsa_bottle/salsa_bottle.png');
        this.y = y;
        this.x = x;
        this.width = 100;
        this.height = 70;
    }

animate() {
    setInterval(() => {
        this.playAnimation(this.IMAGES_COIN);
    }, 300); // alle 300ms wechseln
}

}