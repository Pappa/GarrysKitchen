var K = K || {};

K.PreloadState = {
  preload: function() {
    this.load.image('grey', 'assets/images/grey.png');
    this.load.image('white', 'assets/images/white.png');
    this.load.image('logo', 'assets/images/logo.png');
    this.load.image('lightBlue', 'assets/images/lightBlue.png');
    this.load.image('darkBlue', 'assets/images/darkBlue.png');
    //this.load.audio('splat', ['assets/audio/splat.mp3', 'assets/audio/splat.ogg']);
    //this.load.spritesheet('player', 'assets/images/player_spritesheet.png', 180, 405, 3, 0, 0);
    //this.load.spritesheet('colours', 'assets/images/colours.png', 180, 405, 3, 0, 0);
  },
  create: function() {
    if (navigator && navigator.splashscreen) {
        navigator.splashscreen.hide();
    }
    this.state.start('Game');
  }
};