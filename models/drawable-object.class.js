class DrawableObject {
    x = 120;
    y = 280;
     height = 150;
    width = 100;
    img;
    imageCache = {};
    currentImage = 0;


     // loadImage('img/test.png')
    loadImage(path) {
        this.img = new Image(); // this.img = document.getElementbyId("image") <img id = "image" src>
        this.img.src = path;
    }

      draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }


        /**
     * 
     * @param {Arry} arr -['img/image1.png', 'img/image2.png' usw.]
     */
    loadImages(arr) {
        arr.forEach((path) => {
            const img = new Image();
            img.src = path;

            img.onload = () => {
                this.imageCache[path] = img;
            };
            img.onerror = () => {
                console.error("❌ Fehler beim Laden des Bildes:", path);
            };
        });
    }

}