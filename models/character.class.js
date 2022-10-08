class Character extends MovableObject{

    height = 300;
    width = 200;
    y = 140;
    speed = 1;
    IMAGES_WALKING = [
        'img_pollo_locco/img/2_character_pepe/2_walk/W-21.png',
        'img_pollo_locco/img/2_character_pepe/2_walk/W-22.png',
        'img_pollo_locco/img/2_character_pepe/2_walk/W-23.png',
        'img_pollo_locco/img/2_character_pepe/2_walk/W-24.png',
        'img_pollo_locco/img/2_character_pepe/2_walk/W-25.png',
        'img_pollo_locco/img/2_character_pepe/2_walk/W-26.png'
    ];
    world;
    walking_sound = new Audio('sounds/walkCharacter.mp3')

    constructor(){
        super().loadImage('img_pollo_locco/img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_WALKING);

        this.animate();
    }

    animate(){

        setInterval(() => {
            this.walking_sound.pause();
            if(this.world.keyboard.RIGHT && this.x <= this.world.level.level_end_x){
                this.x += this.speed;
                this.otherDirection = false;
                this.walking_sound.play();
            }
            if(this.world.keyboard.LEFT && this.x >= 0){
                this.x -= this.speed;
                this.otherDirection = true;
                this.walking_sound.play();
            }
            this.world.camera_x = -this.x + 300
        },);




        setInterval(() => {
            if(this.world.keyboard.RIGHT || this.world.keyboard.LEFT){
                //walkanimation
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 100);
    }

    


    jump(){

    }
}