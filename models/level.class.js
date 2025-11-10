class Level {
    enemies;
    clouds;
    backgroundsObjects;
    platform;
    coins;
    bottle;
    music; // ✅ NEU

    level_end_x = 4300;

    constructor(enemies, clouds, backgroundsObjects, platform, coins, bottle, music) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundsObjects = backgroundsObjects;
        this.platform = platform;
        this.coins = coins;
        this.bottle = bottle; // ✅ Flaschen bleiben Array
        this.music = music;   // ✅ Musik bekommt eigenes Feld
    }
}
