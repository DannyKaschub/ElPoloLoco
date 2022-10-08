class MovableObject{
    x = 120;
    y = 280;
    height = 150;
    width = 100;
    img;
    currentImage = 0;
    speed = 0.3;
    otherDirection = false;

    imageCache = {};


    loadImage(path){
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr){
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    playAnimation(images) {
        let i = this.currentImage % this.IMAGES_WALKING.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    moveRight() {
        console.log('Moving Right')
    }

    moveLeft(){
        setInterval( () => {
            this.x -= this.speed;
        }, 1000/60);
    }
}