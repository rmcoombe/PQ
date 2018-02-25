var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO,'')

game.state.add('Boot',PrincessQuest.Boot);
game.state.add('Preload',PrincessQuest.Preload);
game.state.add('MainMenu',PrincessQuest.MainMenu);

game.state.start('Boot');
