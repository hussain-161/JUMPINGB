
var ball;
var surface1;
var surface2;
var surface3;
var surface4;
var box1;
var box2;
var box3;
var box4;

function preload() {
    //load the images here
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   ball=createSprite(700, 200, 50, 50);
   ball.velocityY=-9;
 ball.velocityX=+9;
ball.shapeColor="orange"


   surface1=createSprite(500,8,1000,20);
   surface2=createSprite(500,800,1000,20);
   surface3=createSprite(10,400,20,800);
   surface4=createSprite(990,400,20,800);

   box1=createSprite(100,775,120,30)
   box1.shapeColor="yellow"

  box2=createSprite(300,775,120,30)
  box1.shapeColor="blue"

  box3=createSprite(500,775,120,30)
   box3.shapeColor="green"

   box4=createSprite(700,775,120,30)
   box4.shapeColor="red"
}

function draw() {

    background("black");
    //Write condition here to evalute if tom and jerry collide

    if(ball.isTouching(surface1) && ball.bounceOff(surface1)){
    }
   if(ball.isTouching(surface2) && ball.bounceOff(surface2)){     
   }
   if(ball.isTouching(surface3) && ball.bounceOff(surface3)){     
   }
   if(ball.isTouching(surface4) && ball.bounceOff(surface4)){     
   }
   if (isTouching(ball,box1)){
    if( ball.x-box1.x<box1.width/2+ball.width/2
      && box1.x-ball.x<box1.width/2+ball.width/2 
     && ball.y-box1.y<box1.width/2+ball.width/2
     && box1.y-ball.y<box1.width/2+ball.width/2) 
     {
        return true
    }
   
   else{
    //fixedRect.shapeColor="red";
    //movingRect.shapeColor="green";
    return false
   }
   
   }
   if (isTouching (ball,box1)){
    ball.shapeColor="pink"
    box1.shapeColor="pink"
   
   }
   else{
    ball.shapeColor="red";
    box1.shapeColor="green";
   }
    drawSprites();
}


