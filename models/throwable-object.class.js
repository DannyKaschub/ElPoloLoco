class ThrowableObject extends MovableObject {

    constructor(x, y) {
        super().loadImage('img_pollo_locco/img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        //this.x = 0;
        //this.y = 150; 
        this.height = 100;
        this.width = 100;
        this.trow();
    }

    trow() {
        this.x = 360;
        this.y = 150;
        this.speedy = 30;
        this.applyGravity();
        setInterval( () => {
            this.x += 10;
        }, 25);
    }
}