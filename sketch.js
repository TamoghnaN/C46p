var runner, coin, bar, obc1 ,obc2;
var running, jumping, coinImg, barImg;
var coinGroup, barGroup, obcGroup;
var bg,bgImg,bg2;

function preload(){
  running = loadAnimation("assets/r2.png", "assets/r3.png", "assets/r4.png","assets/r5.png","assets/r6.png","assets/r7.png","assets/r8.png");
  jumping = loadAnimation("assets/j1.png", "assets/j2.png", "assets/j3.png", "assets/j4.png", "assets/j5.png", "assets/r1.png");
  coinImg = loadImage("assets/coin.png");
  barImg = loadImage("assets/energy bar.png");
  obc1 = loadImage("assets/obcD.png");
  obc2= loadImage("assets/obcJ.png");
bgImg = loadImage("assets/bg.jpg");

}

function setup() {
  createCanvas(windowWidth,windowHeight);
runner=createSprite(windowWidth/2-700,windowHeight-150);
runner.addAnimation("run",running);
runner.addAnimation("jump",jumping);
runner.changeAnimation("run",running);
runner.scale=0.7;

bg=createSprite(windowWidth/2,windowHeight/2);
bg.addImage(bgImg);
bg.x=bg.width/2;
bg.scale=2.75;
bg.depth=0;
bg2=createSprite(windowWidth/2,windowHeight/2);
bg2.addImage(bgImg);
bg2.x=windowWidth+200;
bg2.scale=2.75;
bg2.depth=0;
}

function draw() {
  background(0);  
  drawSprites();
bg.velocityX=-3;
bg2.velocityX=-3;
if(bg.x<windowWidth/2-1650){
  bg.x=windowWidth+725;
}
//if(bg2.x<windowWidth/2-300){
//  bg2.x=bg2.width/2+2200;
//}
}