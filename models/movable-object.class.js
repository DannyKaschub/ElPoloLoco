class MovableObject{
    x = 120;
    y = 400;
    height = 150;
    width = 100;
    img;
    currentImage = 0;
    speed = 0.3;
    otherDirection = false;
    speedy = 0;
    acceleration = 2.5;
    energy = 100;

    applyGravity(){
        setInterval(() =>{
            if(this.isAboveGround() || this.speedy > 0) {
                this.y -= this.speedy;
                this.speedy -= this.acceleration;
            }
        },1000/ 25);
    }

    isAboveGround(){
        return this.y <130;
    }

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

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx) {

        if(this instanceof Character || this instanceof Chicken){
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }


    isColliding(mo) {
        return this.x + this.width > mo.x && 
        this.y + this.height > mo.y &&
        this.x < mo.x &&
        this.y + mo.height;
    }

    hit() {
        this.energy -= 5;
        if(this.energy < 0) {
            this.energy = 0;
        }
    }

    idDead() {
        return this.energy == 0;
    }


    playAnimation(images) {
        let i = this.currentImage % this.IMAGES_WALKING.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    moveRight() {
        this.x += this.speed;
    }

    moveLeft(){
        this.x -= this.speed;
    }
}