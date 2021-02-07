var fixedRect,movingRect;
var gameObject1,gameObject2;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);

  gameObject1=createSprite(100,50,30,50);
  gameObject2=createSprite(200,50,30,50)
  //fixedRect.velocityX=2;
 // movingRect.velocityX=-2;
}

function draw() {
  background(0);  
   movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

if(isTouching(gameObject1,movingRect)){
  gameObject1.shapeColor="red";
  movingRect.shapeColor="red";
}else{
  gameObject1.shapeColor="green";
 movingRect.shapeColor="green";
}


  drawSprites();
}
