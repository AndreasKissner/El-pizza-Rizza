class Level{
    enemies;
    clouds;
    backgroundsObjects;
    level_end_x  = 1400 ;
    constructor(enemies,clouds,backgroundsObjects){
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundsObjects = backgroundsObjects;
    }
}