var K = K || {};

K.SceneOne = function(game, x, y) {
  Phaser.Sprite.call(this, game, x, y);

  this.game = game;

  this.createBackground();
  this.createOven();
  this.fire = this.game.make.sprite(240, 29, 'fire');
  this.fire.animations.add('moving', [0, 1, 2, 3, 4], 15, true);
  this.addChild(this.fire);
  this.fire.play('moving');
};

K.util.extend(K.SceneOne, Phaser.Sprite);

K.SceneOne.prototype.createBackground = function () {
  var background = this.game.make.sprite(0, 0, 'lightBlue');
  background.width = 540;
  background.height = 88;
  this.addChild(background);
  var line = this.game.make.sprite(0, 88, 'black');
  line.width = 540;
  line.height = 2;
  this.addChild(line);
};

K.SceneOne.prototype.createOven = function () {
  var ovenTop = this.game.make.sprite(200, 23, 'peach');
  ovenTop.width = 170;
  ovenTop.height = 3;
  this.addChild(ovenTop);
  var ovenPart1 = this.game.make.sprite(200, 26, 'darkRed');
  ovenPart1.width = 170;
  ovenPart1.height = 3;
  this.addChild(ovenPart1);
  var ovenPart2 = this.game.make.sprite(200, 29, 'darkRed');
  ovenPart2.width = 115;
  ovenPart2.height = 20;
  this.addChild(ovenPart2);
};