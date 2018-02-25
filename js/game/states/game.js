PrincessQuest.Game = function(){}

PrincessQuest.Game.prototype = {

	create: function() {
		this.background = this.game.add.tileSprite(0,0,this.game.width,452,'background');
		
		this.ground = this.game.add.tileSprite(0,this.game.height-149,this.game.width,73,'ground');
		

		this.player = this.add.sprite(200, this.game.height-300, 'playerIdle');
		this.player.anchor.setTo(0.5);
		this.player.scale.setTo(0.3);

		this.player.animations.add('idle', [0,1,2,3,4,5,6,7,8,9]);
		this.player.animations.play('idle', 10, true);

		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		this.game.physics.arcade.gravity.y = 400;
		
		this.game.physics.arcade.enableBody (this.ground);
		this.ground.body.allowGravity = false;
		this.ground.body.immovable = true;

		this.game.physics.arcade.enableBody(this.player);
		this.player.body.collideWorldBounds = true;
	},

	update: function() {
		this.game.physics.arcade.collide(this.player, this.ground);

		if (this.game.input.activePointer.isDown){
			this.player.body.velocity.x +=25;
		} 
	},
	shutdown: function (){


	}

}