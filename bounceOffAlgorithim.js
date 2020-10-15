
var fixRect,movingRect;

function setup() {
  createCanvas(800,400);

  fixRect = createSprite (400,100,70,100);
  fixRect.shapeColor="yellow";
  fixRect.debug=true;
  movingRect = createSprite (400,400,40,80);
  movingRect.shapeColor="red";
  movingRect.debug=true;
  movingRect.velocityY=-7;
  fixRect.velocityY=7;

  


}

function draw() {
  background("black");


  
bounceOff(movingRect,fixRect);
  drawSprites();
}
