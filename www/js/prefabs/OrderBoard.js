var K = K || {};

K.OrderBoard = function(game, x, y) {
  Phaser.Group.call(this, game);

  this.game = game;
  this.x = x;
  this.y = y;

  this.orderDisplayXOffset = 140;
  this.orderDisplayYOffset = 20;
  this.barWidth = 230;
  this.barHeight = 10;
  this.borderHeight = 1;

  this.createBackground(x, y);
  this.createOrderDisplay(x, y);
};

K.util.extend(K.OrderBoard, Phaser.Group);

K.OrderBoard.prototype.createBackground = function (x, y) {
  this.background = this.game.add.sprite(0, 0, 'grey');
  this.background.width = 540;
  this.background.height = 60;
  this.add(this.background);
};

K.OrderBoard.prototype.createOrderDisplay = function (x, y) {
  var xPos = this.orderDisplayXOffset,
    yPos = this.orderDisplayYOffset;

  this.displayBars = [];

  for (i = 0; i < 7; i++) {
    if (i % 2) {
      this.displayBars[i] = this.game.add.graphics(xPos, yPos);
      this.setupOrderBar(this.displayBars[i]);
      yPos += this.barHeight;
    } else {
      this.displayBars[i] = this.game.add.sprite(xPos, yPos, 'white');
      this.displayBars[i].width = this.barWidth;
      this.displayBars[i].height = this.borderHeight;
      yPos += this.borderHeight;
    }
  };
  this.addMultiple(this.displayBars);
  this.order1 = this.displayBars[1];
  this.order2 = this.displayBars[3];
  this.order3 = this.displayBars[5];
};

K.OrderBoard.prototype.setupOrderBar = function (orderBar) {
  var colours = {
      r: 0xa74236,
      g: 0x64984f,
      b: 0x5367d0
    },
    colourNames = ["r", "g", "b"];
  item = colourNames[Math.floor(Math.random()*colourNames.length)];
  orderBar.beginFill(colours[item]);
  orderBar.drawRect(0, 0, this.barWidth, this.barHeight);
  orderBar.endFill();
};