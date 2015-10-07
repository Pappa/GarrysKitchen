var K = K || {};

function onDeviceReady() {
    if (device && device.setOrientation) {
        device.setOrientation("portrait");
    }

    document.addEventListener("pause", function() {
        K.game.paused = true;
        //console.log("pause");
    }, false);

    document.addEventListener("resume", function() {
        K.game.paused = false;
        //console.log("resume");
    }, false);

    document.removeEventListener('deviceready', onDeviceReady);
}

document.addEventListener("deviceready", onDeviceReady, false);

K.game = new Phaser.Game(320, 480, Phaser.AUTO);

K.game.state.add('Boot', K.BootState);
K.game.state.add('Preload', K.PreloadState);
K.game.state.add('Game', K.GameState);

K.game.state.start('Boot');
