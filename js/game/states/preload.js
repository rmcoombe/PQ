PrincessQuest.Preload = function() {
  this.ready = false;
};

PrincessQuest.Preload.prototype = {
  preload: function() {

    this.splash = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
    this.splash.anchor.setTo(0.5);

    this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'preloadbar');
    this.preloadBar.anchor.setTo(0.5);

    this.load.setPreloadSprite(this.preloadBar);

    this.load.image('ground', 'assets/images/ground.png');
    this.load.image('background', 'assets/images/background.png');
   

    this.load.spritesheet('coins', 'assets/images/coins-ps.png', 51, 51, 7);
    this.load.spritesheet('player', 'assets/images/knightWalk-ps.png', 587, 667, 10);
    this.load.spritesheet('playerIdle', 'assets/images/knightIdle-ps.png', 587, 606, 10);
    this.load.spritesheet('missile', 'assets/images/missiles-ps.png', 361, 218, 4);

    this.load.audio('gameMusic', ['assets/audio/Pamgaea.mp3', 'assets/audio/Pamgaea.ogg']);
    this.load.audio('rocket', 'assets/audio/rocket.wav');
    this.load.audio('bounce', 'assets/audio/bounce.wav');
    this.load.audio('coin', 'assets/audio/coin.wav');
    this.load.audio('death', 'assets/audio/death.wav');

    this.load.bitmapFont('rocket', 'assets/fonts/rocket/rocket.png', 'assets/fonts/rocket/rocket.xml');

    this.load.onLoadComplete.add(this.onLoadComplete, this);
  },
  create: function() {
    this.preloadBar.cropEnabled = false;
  }, 
  update: function() {
    if(this.cache.isSoundDecoded('gameMusic') && this.ready === true) {
      this.state.start('MainMenu');
    }
  },
  onLoadComplete: function() {
    this.ready = true;
  }
};