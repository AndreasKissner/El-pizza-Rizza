class Level{
    enemies;
    clouds;
    backgroundsObjects;
    
    level_end_x  = 6400 ;



    constructor(enemies,clouds,backgroundsObjects,platform){
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundsObjects = backgroundsObjects;
        this.platform = platform;
    }
}