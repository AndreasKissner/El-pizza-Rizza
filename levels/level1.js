const level1 = new Level(
    [
        new Chicken(700),
        new Chicken(1200),
        new Chicken(1500),
        new Chicken(1800),
        new Chicken(2100),
        new Endboss(2200),
        new MiniChicken(600),
        new MiniChicken(1100),
        new MiniChicken(1300),
        new MiniChicken(1700),
        new MiniChicken(2000),
    ],
    [
        new Cloud(),
    ],
    [
        new backgroundObject('img/5_background/layers/air.png', -720),
        new backgroundObject('img/5_background/layers/3_third_layer/2.png', -720),
        new backgroundObject('img/5_background/layers/2_second_layer/2.png', -720),
        new backgroundObject('img/5_background/layers/1_first_layer/2.png', -720),
        new backgroundObject('img/5_background/layers/air.png', 0),
        new backgroundObject('img/5_background/layers/3_third_layer/1.png', 0),
        new backgroundObject('img/5_background/layers/2_second_layer/1.png', 0),
        new backgroundObject('img/5_background/layers/1_first_layer/1.png', 0),
        new backgroundObject('img/5_background/layers/air.png', 720),
        new backgroundObject('img/5_background/layers/3_third_layer/2.png', 720),
        new backgroundObject('img/5_background/layers/2_second_layer/2.png', 720),
        new backgroundObject('img/5_background/layers/1_first_layer/2.png', 720),

        new backgroundObject('img/5_background/layers/air.png', 0),
        new backgroundObject('img/5_background/layers/3_third_layer/1.png', 0),
        new backgroundObject('img/5_background/layers/2_second_layer/1.png', 0),
        new backgroundObject('img/5_background/layers/1_first_layer/1.png', 0),
        new backgroundObject('img/5_background/layers/air.png', 720 * 2),
        new backgroundObject('img/5_background/layers/3_third_layer/2.png', 720 * 2),
        new backgroundObject('img/5_background/layers/2_second_layer/2.png', 720 * 2),
        new backgroundObject('img/5_background/layers/1_first_layer/2.png', 720 * 2),
    ]

)
