var srv,srvImg
var zom,zomImg
var bullet;
var bulletG;
var RUN = 1;
var PLAY = 2;
var gameState = PLAY;
var zombG ;
var ground,grndImg;
var score;

function preload()
{
  srvImg = loadAnimation("s1.png","s2.png","s3.png");
  zomImg = loadAnimation("z1.png","z2.png");
  grndImg = loadImage ("ground.jpg");
}

function setup() {
  createCanvas(800, 800);
  ground= createSprite (400,400,800,1600);
  ground.addImage (grndImg);
  ground.scale = 1.5
 
  ground.y = ground.height/2
srv = createSprite(400,700,40,60);
srv.addAnimation("running",srvImg)
score = 0;


bulletG=createGroup();
zombG=createGroup();
zombG1=createGroup();
}



function draw() {
  ground.velocityY = 0.5;
  if(ground.y > 800){
    ground.y = ground.height/2
  }
  if (keyWentDown("space")){

    shoot();
  }
  if( keyWentDown(LEFT_ARROW)){
srv.x = srv.x-25
  }
  if(keyWentDown(RIGHT_ARROW)){
    srv.x = srv.x+25
  }
  
  background(grndImg);
  
  if (bulletG.isTouching(zombG)){
//gameState = RUN;
zombG.destroyEach()
score = score + 1
      
    bulletG.destroyEach();
  }
  if (bulletG.isTouching(zombG1)){
    //gameState = RUN;
    zombG1.destroyEach()
    score = score + 2
          
        bulletG.destroyEach();
      }
  zombie();
  zombie1();
  drawSprites();
  fill("white");
  text("score:"+score,40,40);

}

function shoot(){

  bullet=createSprite(400,700,10,10);
  bullet.shapeColor = "red"
  bullet.x = srv.x;
  bullet.y = srv.y;
  bullet.velocityY = -10;
  bullet.lifeTime = 200;
  bulletG.add(bullet);
}
function zombie(){
  if(frameCount %160 === 0){
    zom = createSprite(random(20,750),20,40,60);
zom.addAnimation("running",zomImg)
zom.scale=0.5;
    zom.velocityY = 3;
zombG.add(zom);

  }
}

function zombie1(){
  if(frameCount %140 === 0){
    zom = createSprite(random(20,750),20,40,60);
zom.addAnimation("running",zomImg)
zom.scale=0.5;
    zom.velocityY = 3;
    zom.tint= "red"
zombG1.add(zom);

  }
}