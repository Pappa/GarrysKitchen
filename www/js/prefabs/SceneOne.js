var K = K || {};

K.SceneOne = function(game, x, y) {
  Phaser.Sprite.call(this, game, x, y);

  this.game = game;

  this.createBackground();
};

K.util.extend(K.SceneOne, Phaser.Sprite);

K.SceneOne.prototype.createBackground = function () {
};