(function(){
  game.state.add('menu', {preload:preload, create:create});

  function preload(){
    //game.load.image('background', '/assets/backgrounds/background.png');
    game.load.tilemap('mario', '/assets/backgrounds/marioLevel1.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('tiles', '/assets/backgrounds/worldfinal.png');
    game.load.image('tiles2', '/assets/backgrounds/tiles_32x32.png')
    //CHARACTERS:
    game.load.spritesheet('hero', '/assets/characters/hero/hero.png', 64, 64, 265);
  }

  function create(){
    game.physics.startSystem(Phaser.Physics.ARCADE);

    //game.add.tileSprite(0, 0, 800, 600, 'bg');
    game.stage.backgroundColor = '#6686ff';

    var text = game.add.text(game.world.centerX, game.world.centerY, 'Mario\nPress SPACE to Begin');
    text.anchor.setTo(0.5);

    var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    spaceKey.onDown.add(start);
  }

  function start(){
    game.state.start('lvl1');
  }
})();
