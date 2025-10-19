class MovableObject {
    x = 120;
    y = 250;
    height = 150;
    width = 100;
    img;


    // loadImage('img/test.png')
    loadImage(path) {
        this.img = new Image(); // this.img = document.getElementbyId("image") <img id = "image" src>
        this.img.src = path;
    }


    moveRight() {
        console.log("Moving right");
    }

    moveLeft() {

    }

}