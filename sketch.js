
var monkey , monkey_running,ground;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score;

function preload(){
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
}



function setup() {
  createCanvas(600,400);
  
  monkey = createSprite(70,250,10,40);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.15;
  
  ground = createSprite(200,320,400,20);
  ground.velocityX=-6;
  
  foodGroup = new Group();
  obstaclesGroup = new Group();
  
  score=0;
}


function draw() {
  background("blue");
  
  if(ground.x>0){
    ground.x=ground.width/2;
  }
  if(keyDown("space")){
    monkey.velocityY=-10;
  }
  
  monkey.velocityY=monkey.velocityY+0.5;
  monkey.collide(ground);
  
  spawnFood();
  spawnObstacles();
  
  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate()) 
  text("Survival Time: "+ survivalTime, 100,50);
  
}

function spawnFood(){
  if(frameCount%80===0){
    banana=createSprite(600,250,15,20);
    banana.addImage(bananaImage);
    banana.y=Math.round(random(120,200));
    banana.scale=0.1;
    banana.velocityX=-5;
    banana.lifetime=200;
    
    foodGroup.add(banana);
    
  }
}


function spawnObstacles() {
  if(frameCount % 300 === 0) {
    obstacle = createSprite(800,280,10,40);
    obstacle.velocityX = -6;
    
    //add image to the obstacle 
    obstacle.addImage(obstaceImage);
    obstacle.scale=0.15;
    
    //lifetime to the obstacle     
    obstacle.lifetime = 300;
    
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}





