
'use strict';
ZenvaRunner.Preloader = function (game) {

  this.background = null;
  this.preloadBar = null;
  this.ready = false;

};

ZenvaRunner.Preloader.prototype = {

  preload: function () {

    //  These are the assets we loaded in Boot.js
    //  A nice logo and a loading progress bar
    this.background = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'splash');
    this.background.anchor.setTo(0.5, 0.5);
    this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'preloaderBar');
    this.preloadBar.anchor.setTo(0.5, 0.5);

    //  This sets the preloadBar sprite as a loader sprite.
    //  What that does is automatically crop the sprite from 0 to full-width
    //  as the files below are loaded in.
    this.load.setPreloadSprite(this.preloadBar);

   
    //this.load.image('start', 'assets/images/start.png');

    //load font
    this.load.bitmapFont('minecraftia', 'assets/fonts/minecraftia/minecraftia.png', 'assets/fonts/minecraftia/minecraftia.xml');

    
    this.load.image('ground', 'assets/images/tiles/ground.png');
    this.load.image('shadow', 'assets/images/shadow.png');
    this.load.image('background', 'assets/images/tiles/background-full.png');
    this.load.image('foreground', 'assets/images/tiles/foreground.png');
    this.load.image('midground', 'assets/images/tiles/midground.png');
    this.load.atlas('player', 'assets/images/jetpack-spritesheet.png', 'assets/images/jetpack-spritesheet-definition.json');
    this.load.atlas('missile', 'assets/images/missile-spritesheet.png', 'assets/images/missile-spritesheet-definition.json');
    this.load.atlas('coin', 'assets/images/coin-spritesheet.png', 'assets/images/coin-spritesheet-definition.json');



    this.load.audio('gameMusic', ['assets/audio/Pamgaea.mp3', 'assets/audio/Pamgaea.ogg']);
    this.load.audio('flap', 'assets/audio/rocket.wav');
    this.load.audio('bounce', 'assets/audio/bounce.wav');
    this.load.audio('coin', 'assets/audio/coin.wav');
    this.load.audio('death', 'assets/audio/death.wav');


    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);

  },

  create: function () {

    //  Once the load has finished we disable the crop because we're going to sit in the update loop for a short while as the music decodes
    this.preloadBar.cropEnabled = false;

  },

  update: function () {

    //  You don't actually need to do this, but I find it gives a much smoother game experience.
    //  Basically it will wait for our audio file to be decoded before proceeding to the MainMenu.
    //  You can jump right into the menu if you want and still play the music, but you'll have a few
    //  seconds of delay while the mp3 decodes - so if you need your music to be in-sync with your menu
    //  it's best to wait for it to decode here first, then carry on.
    
    //  If you don't have any music in your game then put the game.state.start line into the create function and delete
    //  the update function completely.
    
    if (this.cache.isSoundDecoded('gameMusic') && this.ready == true)
    {
      this.state.start('MainMenu');
    }

  },
  onLoadComplete: function() {
    this.ready = true;
  }

};
