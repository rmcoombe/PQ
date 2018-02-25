PrincessQuest.MainMenu = function() {};

PrincessQuest.MainMenu.prototype = {
	create: function(){
		this.background = this.game.add.tileSprite(0,0,this.game.width,452,'background');
		this.background.autoScroll(-100,0);
		this.ground = this.game.add.tileSprite(0,this.game.height-149,this.game.width,73,'ground');
		this.ground.autoScroll(-100,0);


		this.player = this.add.sprite(200, this.game.height-300, 'player');
		this.player.anchor.setTo(0.5);
		this.player.scale.setTo(0.3);

		this.player.animations.add('walk', [0,1,2,3,4,5,6,7,8,9]);
		this.player.animations.play('walk', 10, true);

		//this.game.add.tween(this.player).to({y: this.player.y -2}, 500, Phaser.Easing.Linear.NONE, true, 0, Infinity, true);
	
		this.splash = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
    	this.splash.anchor.setTo(0.5);

    	this.game.physics.startSystem(Phaser.Physics.ARCADE);
		this.game.physics.arcade.gravity.y = 400;
		
		this.game.physics.arcade.enableBody (this.ground);
		this.ground.body.allowGravity = false;
		this.ground.body.immovable = true;

		this.game.physics.arcade.enableBody(this.player);
		this.player.body.collideWorldBounds = true;
	},
	update: function(){
		if (this.game.input.activePointer.justPressed()) {
			this.game.state.start('Game');
		}
		this.game.physics.arcade.collide(this.player, this.ground);

	}
};