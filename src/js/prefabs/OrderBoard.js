var K = K || {};

K.OrderBoard = function(game, x, y) {
  Phaser.Sprite.call(this, game, x, y);

  this.game = game;
  this.x = x;
  this.y = y;

  this.orderDisplayXOffset = 140;
  this.orderDisplayYOffset = 20;
  this.bars = 3;
  this.barWidth = 230;
  this.barHeight = 10;
  this.borderHeight = 1;

  this.createBackground(x, y);
  this.createOrderDisplay(x, y);
};

K.util.extend(K.OrderBoard, Phaser.Sprite);

K.OrderBoard.prototype.createBackground = function (x, y) {
  this.background = this.game.make.sprite(0, 0, '1px');
  this.background.tint = K.config.Colours.GREY;
  this.background.width = 540;
  this.background.height = 60;
  this.addChild(this.background);
};

K.OrderBoard.prototype.createOrderDisplay = function (x, y) {
  var xPos = this.orderDisplayXOffset,
    yPos = this.orderDisplayYOffset,
    bar = {};

  this.orders = [];

  for (i = 0; i <= (this.bars * 2); i++) {
    if (i % 2) {
      bar = this.game.add.graphics(xPos, yPos);
      this.setupOrderBar(bar);
      this.orders.push(bar);
      yPos += this.barHeight;
    } else {
      bar = this.game.add.sprite(xPos, yPos, '1px');
      bar.width = this.barWidth;
      bar.height = this.borderHeight;
      yPos += this.borderHeight;
    }
    this.addChild(bar);
  };
};

K.OrderBoard.prototype.setupOrderBar = function (orderBar) {
  var colours = [0xa74236, 0x64984f, 0x5367d0];
  orderBar.beginFill(colours.random());
  orderBar.drawRect(0, 0, this.barWidth, this.barHeight);
  orderBar.endFill();
};