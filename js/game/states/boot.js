var PrincessQuest = function() {};

PrincessQuest.Boot = function(){};

PrincessQuest.Boot.prototype = {
	preload: function(){
	this.load.image('logo', 'assets/images/logo.png');
	this.load.image('preloadbar', 'assets/images/preloader-bar.png');
	},
	
	create: function(){
		this.game.stage.backgroundColor = "#000"; //setting the background image to white
		
		//removing the multi-touch functionality
		this.input.maxPointers = 1;
		
		//checking to see if the platform is desktop and aligning horizontally
		if (this.game.device.desktop){
			this.scale.pageAlignHorizontally = true;
		} else {
			this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL; //Attempt to scale the screen so its all shown, to the following constraints
			this.scale.minWidth = 568;
			this.scale.minHeight = 600;
			this.scale.maxWidth = 2048;
			this.scale.maxHeight = 1536;
			this.scale.forceLandscape = true; //To ensure the game is played in landscape
			this.scale.pageAlignHorizontally = true;
			this.scale.setScreenSize(true);

		}
		this.state.start('Preload');
	}
};
				
