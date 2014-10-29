/*function(){
  game.state.add('lvl2', {create:create, update:update});

  var score, map, tileset, layer;

  function create(){
    game.physics.startSystem(Phaser.Physics.ARCADE);

    game.stage.backgroundColor = '#6686ff';
    map = game.add.tilemap('mario');
    map.addTilesetImage('worldfinal', 'tiles');
    map.setCollisionBetween(39, 44);
    layer = map.createLayer('Tile Layer 1');

    player = game.add.sprite(20, 200, 'hero');
    player.animations.add('left', [117, 118, 119, 120, 121, 122, 123, 124, 125], 10, true);
    player.animations.add('right', [143, 144, 145, 146, 147, 148, 149, 150, 151], 10, true);
    player.animations.add('still', [130, 131, 132, 133, 134, 135, 136, 137, 138], 10, true);
    game.physics.enable(player, Phaser.Physics.ARCADE);
    player.anchor.set(0.5, 0.5);
    player.body.gravity.y = 900;
    player.body.setSize(32, 50, 0, 5);
    player.body.collideWorldBounds = true;
    game.camera.follow(player);
    cursors = game.input.keyboard.createCursorKeys();

  }

  function update(){
    game.physics.arcade.collide(player, layer);

    if(cursors.left.isDown){
      player.body.velocity.x = -150;
      player.animations.play('left');
    }
    else if(cursors.right.isDown){
      player.body.velocity.x = 150;
      player.animations.play('right');
    }else{
      player.body.velocity.x = 0;
      player.animations.play('still');
    }

    if(cursors.up.isDown && player.body.touching.down){
      player.body.velocity.y = -350;
    }
  }


})();
*/
