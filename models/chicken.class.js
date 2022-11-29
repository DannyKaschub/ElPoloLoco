class Chicken extends MovableObject {


    y = 350;
    height = 80;
    width = 80;
    is_dead = false;
    IMAGES_WALKING = [
        'img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];

    IMAGES_DEAD = [
        'img_pollo_locco/img/3_enemies_chicken/chicken_normal/2_dead/dead.png'
    ];

    constructor() {
        super().loadImage('img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');

        this.x = 500 + Math.random() * 1500;
        this.speed = 0.3 + Math.random() * 0.5;
        this.loadImages(this.IMAGES_WALKING);
        this.animate();
    }

    animate() {
        this.move = setInterval( () => {
            this.x -= this.speed;
        }, 1000/60);

        this.walkAnimation = setInterval(() => {
            if (!this.is_dead) {
                this.playAnimation(this.IMAGES_WALKING) 
            } else {
                this.loadImage('img_pollo_locco/img/3_enemies_chicken/chicken_normal/2_dead/dead.png');
            }  
        }, 50);
    }
}