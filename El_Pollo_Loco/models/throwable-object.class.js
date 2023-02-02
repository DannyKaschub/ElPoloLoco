class ThrowableObject extends MovableObject {

    IMAGES_BOTTLEROTATION = [
        "img_pollo_locco/img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png",
        "img_pollo_locco/img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png",
        "img_pollo_locco/img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png",
        "img_pollo_locco/img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png"
    ]

    speed = 10;

    constructor(x, y) {
        super().loadImage('img_pollo_locco/img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        this.x = x;
        this.y = y; 
        this.height = 100;
        this.width = 100;
        this.trow();
    }

    trow() {
        this.speedy = 30;
        this.applyGravity();
        setInterval(() => {
            this.x += 15;
        }, 50)
    }
}