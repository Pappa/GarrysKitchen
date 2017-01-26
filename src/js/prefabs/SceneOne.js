var K = K || {};

K.SceneOne = function(game, x, y) {
  Phaser.Sprite.call(this, game, x, y);

  this.game = game;

  this.createSceneSprites();
  this.createFire();
};

K.util.extend(K.SceneOne, Phaser.Sprite);

K.SceneOne.prototype.createSceneSprites = function () {
  K.spriteConfig.SceneOne.forEach(function(el) {
    var sprite = this.game.make.sprite(el.x, el.y, el.texture);
    if (el.tint) {
      sprite.tint = el.tint;
    }
    sprite.width = el.w;
    sprite.height = el.h;
    this.addChild(sprite);
  }, this);
};

K.SceneOne.prototype.createFire = function () {
  this.fire = this.game.make.sprite(240, 29, 'fire');
  this.fire.animations.add('moving', [0, 1, 2, 3, 4], 5, true);
  this.addChild(this.fire);
  this.fire.play('moving');
};