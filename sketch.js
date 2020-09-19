

var bow , arrow, green_balloon, red_balloon ,pink_balloon ,blue_balloon, background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var score;

var redg,greeng,blueg,pinkg,arrowg;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}

function setup() {
  createCanvas(600, 600);
  
  //creating background
  background = createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(480,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   score  = 0;
  
  redg = new Group();
  greeng = new Group();
  blueg = new Group();
  pinkg = new Group();
  arrowg = new Group();
/*
  
//  red_balloon = createSprite(50, 180, 1, 1);
// red_balloon.addImage(red_balloonImage)
//   red_balloon.scale = 0.1
  
  //create line of red balloons using for loop
for(var i=60;i<390;i=i+60){
  red_balloon = createSprite(50, i, 1, 1);
  red_balloon.addImage(red_balloonImage);
  red_balloon.scale = 0.1
}
 
  

//create line of green balloons using for loop
for(var i=110;i<390;i=i+60){
  green_balloon = createSprite(100, i, 10, 10);
  green_balloon.addImage(green_balloonImage);
  green_balloon.scale = 0.1;
}

  
//create line of blue balloons using for loop
//for(var i=130;i<350;i=i+60){  
  blue_balloon = createSprite(140, i, 10, 10);
  blue_balloon.addImage(blue_balloonImage);
  blue_balloon.scale=0.1;
}
  
  //create line of purple balloons using for loop
//for(var i=180;i<250;i=i+60){
  pink_balloon = createSprite(180, i, 10, 10);
  pink_balloon.addImage(pink_balloonImage);
  pink_balloon.scale = 1.2;
}*/
 
}

function draw() {
  // moving ground
    background.velocityX = -3 

    if (background.x < 0){
      background.x = background.width/2;
    }
  
  
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    var temp_arrow = createArrow();
    temp_arrow.addImage(arrowImage);
     temp_arrow.y = bow.y;
  }
  var r = Math.round(random(1,4));
  
  if (frameCount % 60  == 0){
      
  if (r == 1){
  redballoon();
  }
  else if (r == 2){
  pinkballoon();
  }
  else if (r == 3){
  blueballoon();
  }
  else if (r == 4){
  greenballoon();
  }
  }
  if (arrowg.isTouching(redg)){
   arrowg.destroyEach();  
   redg.destroyEach();
   score = score + 1;
  }
  if (arrowg.isTouching(greeng)){
   arrowg.destroyEach();  
   greeng.destroyEach();
   score = score + 1;
  }
  if (arrowg.isTouching(blueg)){
   arrowg.destroyEach();  
   blueg.destroyEach();
   score = score + 1;
  }
  if (arrowg.isTouching(pinkg)){
   arrowg.destroyEach();  
   pinkg.destroyEach();
   score = score + 1;
  }
  
  
  
  
  
  

  
  drawSprites();
  
  text ("score :" + score ,500,50);
}

// Creating  arrows for bow
function createArrow() {
  arrow= createSprite(360, 100, 5, 10);
  arrow.velocityX = -6;
  arrow.scale = 0.3;
  arrow.lifetime = 100;
  arrowg.add(arrow);
  return arrow;
}

function redballoon() {
  
var red = createSprite(0,200,10,10);
red.addImage(red_balloonImage);
red.scale = 0.1;
red.velocityX = 3;
red.lifetime = 150;
redg.add(red);
}
function greenballoon() {

var green = createSprite(0,200,10,10);
green.addImage(green_balloonImage);
green.scale = 0.1;
green.velocityX = 3;
green.lifetime = 150;
greeng.add(green);
}  
function blueballoon() {

var blue = createSprite(0,200,10,10);
blue.addImage(blue_balloonImage);
blue.scale = 0.1;
blue.velocityX = 3;
blue.lifetime = 150;
blueg.add(blue);
}   
function pinkballoon() {

var pink = createSprite(0,200,10,10);
pink.addImage(pink_balloonImage);
pink.velocityX = 3;
pink.lifetime = 150;
pinkg.add(pink);
} 
