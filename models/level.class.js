class Level {
    enemies;
    clouds;
    backgroundsObjects;

    level_end_x = 4300;



    constructor(enemies, clouds, backgroundsObjects, platform, coins) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundsObjects = backgroundsObjects;
        this.platform = platform;
        this.coins = coins;
    }
}