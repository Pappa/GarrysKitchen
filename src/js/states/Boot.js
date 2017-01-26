var K = K || {};

//setting game configuration and loading the assets for the loading screen
K.BootState = {
  init: function() {
    this.game.stage.backgroundColor = '#000';

    //scaling options
    this.scale.scaleMode = Phaser.ScaleManager.NO_SCALE;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
    this.scale.forceOrientation(true, false);

    //physics system
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
  },
  create: function() {
    this.state.start('Preload');
  }
};