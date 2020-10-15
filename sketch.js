
var fixRect,movingRect;

function setup() {
  createCanvas(800,400);

  fixRect = createSprite (100,100,40,40);
  fixRect.shapeColor="white";
  fixRect.debug=true;
  movingRect = createSprite (200,100,40,40);
  movingRect.shapeColor="white";
  movingRect.debug=true;

  gameObject1 = createSprite (300,100,40,40);
  gameObject1.shapeColor="blue";
  gameObject1.debug=true;

  gameObject2 = createSprite (400,300,30,30);
  gameObject2.shapeColor="green";
  gameObject2.debug=true;
  gameObject2.velocityX=-2;

  gameObject3 = createSprite (100,300,30,30);
  gameObject3.shapeColor="yellow";
  gameObject3.debug=true;
  gameObject3.velocityX=4;
}

function draw() {
  background("black");
  movingRect.y=World.mouseY; 
  movingRect.x=World.mouseX;  


  //isTouching();

if(isTouching(movingRect,gameObject1)){
    gameObject1.shapeColor="red";
    movingRect.shapeColor="red";

}
else{

    gameObject1.shapeColor="blue";
    movingRect.shapeColor="white";
}

if(isTouching(movingRect,fixRect)){
    fixRect.shapeColor="red";
    movingRect.shapeColor="red";

}
else{

    fixRect.shapeColor="white";
    movingRect.shapeColor="white";
}
  bounceOff(gameObject2,gameObject3);
  drawSprites();



}


