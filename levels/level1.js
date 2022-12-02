const level1 = new level(
    [
        new Endboss(), //endboss MUSS die erste (nullte) position haben für reibungslose Funktion
        new smallChicken(),
        new smallChicken(),
        new smallChicken(),
        new Chicken(),
        new Chicken(),
        new Chicken()
    ],
    [
        new Cloud()
    ],
    [
        new BackgroundObject('img_pollo_locco/img/5_background/layers/air.png', -719),
        new BackgroundObject('img_pollo_locco/img/5_background/layers/3_third_layer/2.png', -719),
        new BackgroundObject('img_pollo_locco/img/5_background/layers/2_second_layer/2.png', -719),
        new BackgroundObject('img_pollo_locco/img/5_background/layers/1_first_layer/2.png', -719),

        new BackgroundObject('img_pollo_locco/img/5_background/layers/air.png', 0),
        new BackgroundObject('img_pollo_locco/img/5_background/layers/3_third_layer/1.png', 0),
        new BackgroundObject('img_pollo_locco/img/5_background/layers/2_second_layer/1.png', 0),
        new BackgroundObject('img_pollo_locco/img/5_background/layers/1_first_layer/1.png', 0),

        new BackgroundObject('img_pollo_locco/img/5_background/layers/air.png', 719),
        new BackgroundObject('img_pollo_locco/img/5_background/layers/3_third_layer/2.png', 719),
        new BackgroundObject('img_pollo_locco/img/5_background/layers/2_second_layer/2.png', 719),
        new BackgroundObject('img_pollo_locco/img/5_background/layers/1_first_layer/2.png', 719),

        new BackgroundObject('img_pollo_locco/img/5_background/layers/air.png', 719*2),
        new BackgroundObject('img_pollo_locco/img/5_background/layers/3_third_layer/1.png', 719*2),
        new BackgroundObject('img_pollo_locco/img/5_background/layers/2_second_layer/1.png', 719*2),
        new BackgroundObject('img_pollo_locco/img/5_background/layers/1_first_layer/1.png', 719*2),

        new BackgroundObject('img_pollo_locco/img/5_background/layers/air.png', 719*3),
        new BackgroundObject('img_pollo_locco/img/5_background/layers/3_third_layer/2.png', 719*3),
        new BackgroundObject('img_pollo_locco/img/5_background/layers/2_second_layer/2.png', 719*3),
        new BackgroundObject('img_pollo_locco/img/5_background/layers/1_first_layer/2.png', 719*3)

    ],
    [
        new Coin(200, 200),
        new Coin(200, 400),
        new Coin(200, 600)
    ],
    [
        new Bottle(200, 200),
        new Bottle(200, 400),
        new Bottle(200, 600),
        new Bottle(200, 800),
        new Bottle(200, 1000),
        new Bottle(200, 1200)
    ]
);