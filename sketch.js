var PLAY=1;
var END=0;
var gameState=PLAY;
var monkey_Image;
var banana_Image;
var obstacle_Image, StoneGroup;
var background_Image;




function preload() {

  monkey_Image = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  obstacle_Image = loadImage("stone.png");
  background_Image = loadImage("jungle.jpg");
  banana_Image = loadImage("banana.png");

}



function setup() {
  createCanvas(600, 400);

  forest = createSprite(0, 0, 600, 400);
  forest.addImage(background_Image);
  forest.scale = 1.5;

  player = createSprite(50, 340, 20, 50);
  player.addAnimation("monkey", monkey_Image);
  player.scale = 0.2;

  edges = createEdgeSprites();

  StoneGroup = createGroup();
  FoodGroup = createGroup();

  survivalTime=0 ;
}

function draw() {


  
  player.collide(edges[3])

  player.velocityY = player.velocityY + 0.5;

if(gameState === PLAY){
  if (keyDown("space") && player.y >= 314) {

    player.velocityY = -12;

  }

  if (player.isTouching(FoodGroup)) {

    FoodGroup.destroyEach();

  }
  
if (player.isTouching(StoneGroup)) {
 
    gameState=END;

  }
  

  

}
  
else if(gameState===END){
  
 background("black");
 textSize(40);
 fill("white");
 
 
text("You Lose", 200, 220);
 
  
  ogroup.destroyEach();
  fgroup.destroyEach();
  ground.destroy();
  player.destroy();
  
  
}



  fruit();
  stone();
  drawSprites();
  
  stroke("black");
  textSize(20);
  fill("yellow");
  
  survivalTime = survivalTime + Math.round(getFrameRate() / 60);
 
  text("Survival Time  = "+ survivalTime, 250,100);
  
}

function stone() {
  if (World.frameCount % 100 === 0) {

    var stone = createSprite(600, 360, 20, 10);
    stone.addImage(obstacle_Image);
    stone.scale = 0.2;
    stone.velocityX = -6;
    stone.lifetime = 300;
    StoneGroup.add(stone);
  }

}

function fruit() {
  if (World.frameCount % 220 === 0) {
    var banana = createSprite(600, 200, 10, 10);
    banana.addImage(banana_Image);
    banana.scale = 0.05;
    // banana.y=randomNumber(180,220);
    banana.y = Math.round(random(180, 220));
    banana.velocityX = -4;
    banana.lifetime = 300
    FoodGroup.add(banana);


  }

}