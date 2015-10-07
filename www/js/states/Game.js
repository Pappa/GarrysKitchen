var K = K || {};

K.GameState = {

  init: function() {
    //references to config
    this.styles = K.config.GameStateStyles;
    this.strings = K.config.GameStateStrings;
    this.gameConfig = K.config.GameStateValues;
  },
  create: function() {
    this.createAdBanner();
    this.createBackground();
    this.showStartOverlay();
  },
  createAdBanner: function () {
    if(K.admobLoaded && K.config.AdMob.banner.active) {
      AdMob.showBanner(AdMob.AD_POSITION.TOP_CENTER);
    }
  },
  createBackground: function () {
    /*this.background = this.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, 'background');
    this.background.tileScale.y = 2;
    this.background.tileScale.x = 2;
    this.background.autoScroll(-this.levelSpeed/6, 0);
    this.game.world.sendToBack(this.background);*/
  },
  showStartOverlay: function () {
    // display overlay here
    this.hasStarted = false;
  },
  startGame: function () {
    this.hasStarted = true;
  },
  update: function() {
    if (this.hasStarted) {

    } else if (!this.hasStarted && this.game.input.activePointer.isDown) {
      this.startGame();
    }

  },
  pauseUpdate: function () {
      if (this.game.input.activePointer.isDown) {
        this.game.paused = false;
      }
  },
  restart: function(){
    //current bug with tileSprite on v2.3, have to manually remove the sprites from the world before launching a different state
    //http://www.html5gamedevs.com/topic/13843-events-linger-after-remove-and-destroy/
    this.game.world.remove(this.background);

    this.game.state.start('Game');
  }/*,


  render: function() {
    //this.game.debug.soundInfo(this.fartSounds[0], 10, 20);
    //this.game.debug.body(this.player);
    //this.game.debug.bodyInfo(this.player, 0, 30);
  }*/
};
