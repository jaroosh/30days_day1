(()=> {
    /// <reference path="../Scripts/phaser.d.ts"></reference>
    var myGame = new Phaser.Game(800, 480, Phaser.CANVAS, 'game', {
        preload: init,
        create : create,
        update : update
    });

    // init the app.
    function init() {
        myGame.load.atlas('entities', 'Assets/Textures/entities.png', 'Assets/Textures/entities.json');
    }

    // create the app.
    function create() {

    }

    // update the application.
    function update() {

    }
})();