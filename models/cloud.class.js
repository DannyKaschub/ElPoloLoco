class Cloud extends MovableObject{

    y = 20;
    width = 500;
    height = 250;

    constructor(){
        super().loadImage('img_pollo_locco/img/5_background/layers/4_clouds/1.png');

        this.x = 0 + Math.random() * 500;
        this.animate();
    }

    animate(){
        setInterval( () => {
            this.x -=0.3;
        }, 1000/60);
 
    }
}