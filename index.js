var Player = require('player');
var player = new Player('demo.mp3');
var menu = require('terminal-menu')({ width: 29, x: 4, y: 2 });

menu.reset();
menu.write('MILK\n');
menu.write('-------------------------\n');
menu.add('PLAY');
menu.add('PAUSE');
menu.add('EXIT');

menu.on('select', function (label) {
    if (label === 'PLAY') {
        player.play();
    } else if (label === 'PAUSE') {
        player.stop();
    } else if (label === 'EXIT') {
        player.stop();
        menu.close();
    }
});

menu.createStream().pipe(process.stdout);
