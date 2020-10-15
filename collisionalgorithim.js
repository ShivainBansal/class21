
var fixRect,movingRect;

function setup() {
  createCanvas(800,400);

  fixRect = createSprite (200,200,70,100);
  fixRect.shapeColor="white";
  fixRect.debug=true;
  movingRect = createSprite (400,200,40,80);
  movingRect.shapeColor="white";
  movingRect.debug=true;
}

function draw() {
  background("black");
  movingRect.y=World.mouseY; 
  movingRect.x=World.mouseX;  

if( movingRect.x-fixRect.x<=movingRect.width/2+fixRect.width/2 && 
  fixRect.x-movingRect.x<=movingRect.width/2+fixRect.width/2&&
  movingRect.y-fixRect.y<=movingRect.height/2+fixRect.height/2&&
  fixRect.y-movingRect.y<=movingRect.height/2+fixRect.height/2){
  fixRect.shapeColor="green";
  movingRect.shapeColor="green";
}
else {

  fixRect.shapeColor="white";
  movingRect.shapeColor="white";
}

  drawSprites();
}