var K = K || {};

K.SceneTwo = function(game, x, y) {
  Phaser.Sprite.call(this, game, x, y);

  this.game = game;
  this.alive = false;

  this.createBackground();
};

K.util.extend(K.SceneTwo, Phaser.Sprite);

K.SceneTwo.prototype.createBackground = function () {
};