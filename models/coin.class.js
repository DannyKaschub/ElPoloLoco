class Coin extends MovableObject {
    IMAGES_Coin = [
        'img_pollo_locco/img/8_coin/coin_1.png',
        'img_pollo_locco/img/8_coin/coin_2.png'
    ];

    constructor (x, y) {
        super().loadImage(this.IMAGES_Coin[0]);
        this.loadImages(this.IMAGES_Coin);
        this.x = y;
        this.y = x;
        this.animate();
    }

    animate(){
        setInterval(() => {
            this.playAnimation(this.IMAGES_Coin);
        }, 200 );
    }
}