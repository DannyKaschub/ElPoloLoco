class ThrowableObject extends MovableObject {

    constructor(x, y) {
        super().loadImage('img_pollo_locco/img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        this.x = x;
        this.y = y; 
        this.height = 100;
        this.width = 100;
        this.trow();
    }

    trow() {
        this.x = x;
        this.y = y;
        this.speedy = 30;
        this.applyGravity();
        setInterval( () => {
            this.x += 10;
        }, 25);
    }
}