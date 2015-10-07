var K = K || {};

K.PreloadState = {
  preload: function() {
    //this.load.image('pipe', 'assets/images/pipe.png');
    //this.load.audio('splat', ['assets/audio/splat.mp3', 'assets/audio/splat.ogg']);
  },
  create: function() {
    if (navigator && navigator.splashscreen) {
        navigator.splashscreen.hide();
    }
    this.state.start('Game');
  }
};