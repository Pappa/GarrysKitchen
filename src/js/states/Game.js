var K = K || {};

K.GameState = {

  init: function() {
    //references to config
    this.styles = K.config.GameStateStyles;
    this.strings = K.config.GameStateStrings;
    this.gameConfig = K.config.GameStateValues;
  },
  create: function() {
    this.hasStarted = false;
    //this.createPlayer();
    this.createBackgrounds();
    this.cursors = this.game.input.keyboard.createCursorKeys();
    this.orderBoard = new K.OrderBoard(this.game, 50, 262);
    this.game.add.existing(this.orderBoard);
  },
  /*
  createPlayer: function () {
    //create the player
    this.player = this.add.sprite(this.world.centerX, this.world.centerY, 'player');
    this.player.anchor.setTo(0.5);
    this.player.scale.setTo(0.25);
    this.player.animations.add('moving', [1, 2], 15, true);
    this.game.physics.arcade.enable(this.player);
  },*/
  createBackgrounds: function () {
    this.background = this.game.add.sprite(50, 0, '1px');
    this.background.tint = K.config.Colours.DARK_BLUE;
    this.background.width = 540;
    this.background.height = 260;

    this.logo = this.game.add.sprite(145, 327, 'logo');


    this.sceneOneBackground = this.game.add.existing(new K.SceneOne(this.game, 50, 0));
    this.sceneTwoBackground = this.game.add.existing(new K.SceneTwo(this.game, 50, 0));

  },
  startGame: function () {
    this.hasStarted = true;
  },
  update: function() {
    if (this.hasStarted) {

      /*this.player.body.velocity.x = 0;

      if (this.cursors.right.isDown) {
        this.player.body.velocity.x = this.gameConfig.PLAYER_SPEED;
        this.player.scale.setTo(0.25, 0.25);
        this.player.play('moving');
      } else if (this.cursors.left.isDown) {
        this.player.body.velocity.x = -this.gameConfig.PLAYER_SPEED;
        this.player.scale.setTo(-0.25, 0.25);
        this.player.play('moving');
      } else {
        this.player.animations.stop();
        this.player.frame = 0;

      }*/

    } else if (!this.hasStarted && this.game.input.activePointer.isDown) {
      this.startGame();
    }

  },
  pauseUpdate: function () {
      if (this.game.input.activePointer.isDown) {
        this.game.paused = false;
      }
  }/*,
  restart: function(){
    //current bug with tileSprite on v2.3, have to manually remove the sprites from the world before launching a different state
    //http://www.html5gamedevs.com/topic/13843-events-linger-after-remove-and-destroy/
    this.game.world.remove(this.background);

    this.game.state.start('Game');
  },


  render: function() {
    //this.game.debug.body(this.player);
    //this.game.debug.bodyInfo(this.player, 0, 30);
  }*/
};
