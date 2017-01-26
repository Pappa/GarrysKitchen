var K = K || {};

K.SceneTwo = function(game, x, y) {
  Phaser.Sprite.call(this, game, x, y);

  this.game = game;
  this.alive = false;

  this.createSceneSprites();
};

K.util.extend(K.SceneTwo, Phaser.Sprite);

K.SceneTwo.prototype.createSceneSprites = function () {
};