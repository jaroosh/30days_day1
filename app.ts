(() => {

    WebFontConfig = {
        custom: {
            families: ['8bit_wondernominal'],
            urls: ['/Assets/CSS/8bit/8bit.css']
        },
        active: () => { createText(); }
    };
    (function () {
        var wf = document.createElement('script');
        wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
        '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
        wf.type = 'text/javascript';
        wf.async = 'true';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(wf, s);
    })();

    /// <reference path="../Scripts/phaser.d.ts"></reference>
    var myGame = new Phaser.Game(800, 480, Phaser.CANVAS, 'game', {
        preload: init,
        create : create,
        update : update
    });

    // init the app.
    function init() {
    }

    // create the app.
    function create() {

    }

    // update the application.
    function update() {
    }

    var text = null;
    var grd;

    function createText() {
        text = myGame.add.text(myGame.world.centerX, myGame.world.centerY, "- Day 1 -\nfirst game\nthat rocks!" , {});
        text.anchor.setTo(0.5);
        text.font = '8bit_wondernominal';
        text.size = 60;

        //  x0, y0 - x1, y1
        grd = text.context.createLinearGradient(0, 0, 0, text.canvas.height);
        grd.addColorStop(0, '#8ED6FF');
        grd.addColorStop(1, '#004CB3');
        text.fill = grd;

        text.align = 'center';
        text.stroke = '#000000';
        text.strokeThickness = 2;
        text.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);

        text.inputEnabled = true;

        // Enable drag.
        text.input.enableDrag();

        text.events.onInputOver.add(over, this);
        text.events.onInputOut.add(out, this);
    }


    function out() {

        text.fill = grd;

    }

    function over() {

        text.fill = '#ff00ff';

    }

})();