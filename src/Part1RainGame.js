
Crafty.init(500,350, document.getElementById('game'));
Crafty.background('lightblue');    

var block = Crafty.e('Player, 2D, Canvas, Color, Solid, Fourway')
    .color('#F00')
    .fourway(100);
                     
Crafty.e('Floor, 2D, DOM, Color')
    .attr({x: 0, y: 340, w: 500, h: 10})
    .color('black'); 

var player1 = Crafty.e('Player, 2D, Canvas, Color, Solid, Twoway, Gravity')
    .attr({x: 0, y: 0, w: 30, h: 30})
    .color('#F00')
    .twoway(100)
    .gravity('Floor')
    .gravityConst(250);

