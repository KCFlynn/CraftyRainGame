var screenWidth = 800;
var screenHeight = 400;
var hitCounter = 0;

Crafty.init(screenWidth,screenHeight, document.getElementById('game'));
Crafty.background('lightblue');

Crafty.e('Floor, 2D, Canvas, Solid, Color')
    .attr({x: 0, y: 390, w: screenWidth * 2, h: 10})
    .color('black');

var player1 = Crafty.e('Player, 2D, Canvas, Color, Solid, Twoway, Gravity, Collision')
        .attr({x: 20, y: 0, w: 30, h: 30})
        .color('#F00')
        .twoway(100)
        .gravity('Floor')
        .gravityConst(250)
        .bind("EnterFrame", function(){
          if (this.x == screenWidth)
          {
            pause();
            Crafty.e('2D, Canvas, Text').attr({x:screenWidth/2, y:screenHeight/2}).text("Stage 1 Clear").textFont({size:'20px', weight:'bold'});
          }
        });

var hitText = Crafty.e('2D, Canvas, Text')
  .attr({x: screenWidth - 100, y: 10
  });

hitText.text('Hit:' + hitCounter);

hitText.textFont({
  size: '30px',
  weight: 'bold'
});

function drop()
{
  var randomx = Math.floor((Math.random() * screenWidth) + 50);
    Crafty.e('Drop, 2D, Canvas, Color, Solid, Gravity, Collision')
        .attr({x: randomx, y: 0, w: 2, h: 10})
        .color('#000080')
        .gravity()
        .gravityConst(200)
        .checkHits('Player')
        .bind("HitOn", function(){
            this.destroy();
            hitCounter++;
            hitText.text("Hit: " + hitCounter);

            if (hitCounter == 6)
            {
              player1.x = 20;
              hitCounter = 0;
              hitText.text("Hit: " + hitCounter);
            }
        })
        .bind("EnterFrame", function() {
            if (this.y > screenHeight)
              this.destroy();
        });
}

function pause()
{
  Crafty.pause();
}

Crafty.bind("EnterFrame", function(){
  document.getElementById("message").innerHTML = Crafty.frame();

  if (Crafty.frame() % 4 == 0)
    drop();
});