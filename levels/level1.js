const level1 = new Level(
    [
        new Chicken(700),
        new Chicken(1200),
        new Chicken(1500),
        new Chicken(1800),
        new Chicken(2100),
        new MiniChicken(600),
        new MiniChicken(1100),
        new MiniChicken(1300),
        new MiniChicken(1700),
        new MiniChicken(2000),
        new Endboss(2200),
    ],
    [
        new Cloud(300),
        new Cloud(900),
        new Cloud(1600),
        new Cloud(2300),
        new Cloud(3000),
        new Cloud(3700),
        new Cloud(4300),


    ],
    [
        new BackgroundObject('img/5_background/layers/air.png', -719),
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', -719),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', -719),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', -719),

        new BackgroundObject('img/5_background/layers/air.png', 0),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 0),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 0),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 0),

        new BackgroundObject('img/5_background/layers/air.png', 719),
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719),

        new BackgroundObject('img/5_background/layers/air.png', 719 * 2),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719 * 2),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719 * 2),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719 * 2),

        new BackgroundObject('img/5_background/layers/air.png', 719 * 3),
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719 * 3),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719 * 3),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719 * 3),

        new BackgroundObject('img/5_background/layers/air.png', 719 * 4),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719 * 4),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719 * 4),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719 * 4),

        new BackgroundObject('img/5_background/layers/air.png', 719 * 5),
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719 * 5),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719 * 5),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719 * 5),

        new BackgroundObject('img/5_background/layers/air.png', 719 * 6),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719 * 6),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719 * 6),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719 * 6),
    ],

    [
        new Platform(500, 280),
        new Platform(800, 220),
        new Platform(1300, 280),
        new Platform(2400, 280),
        new Platform(2700, 220),
        new Platform(3100, 200)
    ],

    new Audio('./audi/musik.mp3'),

)

// 👇 HIER kommt dein Map-Längen-Code:
let backgrounds = level1.backgroundsObjects;

// Sicherstellen, dass die Hintergrundobjekte existieren:
if (backgrounds && backgrounds.length > 0) {
    let firstX = Math.min(...backgrounds.map(b => b.x));
    let lastX = Math.max(...backgrounds.map(b => b.x));
    let mapWidth = lastX - firstX + 719; // 719 = Breite eines Abschnitts
    console.log("Map-Länge:", mapWidth, "Pixel");
} 