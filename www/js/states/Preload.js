var K = K || {};

K.PreloadState = {
  preload: function() {
    //this.load.image('pipe', 'assets/images/pipe.png');
    //this.load.audio('splat', ['assets/audio/splat.mp3', 'assets/audio/splat.ogg']);
    this.load.spritesheet('player', 'assets/images/player_spritesheet.png', 180, 405, 3, 0, 0);
  },
  create: function() {
    if (navigator && navigator.splashscreen) {
        navigator.splashscreen.hide();
    }
    this.state.start('Game');
  }
};