class level{
    enemies;
    clouds;
    backgroundobjects;
    level_end_x = 2200;

    constructor(enemies, clouds, backgroundobjects, collectObjects){
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundobjects = backgroundobjects;
        this.collectObjects = collectObjects;
    }
}