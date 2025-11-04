class ThrowableObject extends MovableObject {

    constructor() {
        super();
        this.loadImage('img/6_salsa_bottle/salsa_bottle.png'); // ✅ richtig!
        this.x = 330;
        this.y = 80;
    }
}
