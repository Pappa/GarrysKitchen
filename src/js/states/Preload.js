var K = K || {};

K.PreloadState = {
  preload: function() {
    this.load.image('grey', 'assets/images/grey.png');
    this.load.image('white', 'assets/images/white.png');
    this.load.image('black', 'assets/images/black.png');
    this.load.image('peach', 'assets/images/peach.png');
    this.load.image('lightBlue', 'assets/images/lightBlue.png');
    this.load.image('darkBlue', 'assets/images/darkBlue.png');
    this.load.image('darkRed', 'assets/images/darkRed.png');
    this.load.image('darkGrey', 'assets/images/darkGrey.png');
    this.load.image('logo', 'assets/images/logo.png');
    this.load.image('conveyorCorner', 'assets/images/conveyor-corner.png');
    //this.load.audio('splat', ['assets/audio/splat.mp3', 'assets/audio/splat.ogg']);
    this.load.spritesheet('fire', 'assets/images/fire.png', 30, 17, 5, 0, 1);
    //this.load.spritesheet('colours', 'assets/images/colours.png', 180, 405, 3, 0, 0);
  },
  create: function() {
    if (navigator && navigator.splashscreen) {
        navigator.splashscreen.hide();
    }
    this.state.start('Game');
  }
};