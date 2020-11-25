const  Engine = Matter.Engine;
const  World = Matter.World;
const  Bodies = Matter.Bodies;

var plinkos = [];
var divisions = [];

var engine,world;
var particles;
var turn = 0;
var c=0;
var gameState = "PLAY";

var divisionHeight=500;
var score =0;

function preload(){
  backgroundImg= loadImage("sprites/grass.png");
  // mousePressed();
  calculateScore();
}

function setup() {
  var canvas = createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;



   for (var k = 0; k <=width; k = k + 100) {
     divisions.push(new Divisions(k, height-divisionHeight/3.5, 10, divisionHeight));
   }


    for (var j = 30; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,160));
    }

     for (var j = 30; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,245));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,330));
    }

    

    
}
 


function draw() {
  background(backgroundImg);
  Engine.update(engine);
  
  
  if(gameState==="PLAY")
  {
  
    for (var i = 0; i < plinkos.length; i++) {
      
      plinkos[i].display();
      
    }

    for (var k = 0; k < divisions.length; k++) {
      
      divisions[k].display();
    }
    
    fill(0);
    textSize(15)
    text("Score: "+score,10,30);
    
    fill(0);
    textSize(15)
    text("Chances: "+turn,700,30);
    
    fill(0);
    textSize(20);
    text("Click anywhere to make the ball fall. You have only 5 chances to play",80,50);
     
      if(particles!==undefined)
     {
        particles.display();
        if(particles.body.position.y>600)
        {
          if(particles.body.position.x<300)
          {
            score=score+500;
            particles=undefined;
          } 
          else if(particles.body.position.x>300 && particles.body.position.x<500)
          {
            score=score+100;
            particles=undefined;
          }
           else if(particles.body.position.x>500 && particles.body.position.x<750)
          {
            score=score+200;
            particles=undefined;
          }
          
         
        }
      }

    if (turn>=5 && particles===undefined){
      gameState="END"
    }
  } 
  else if (gameState==="END")
  {
    fill(255);
    textSize(65);
    text("Score: "+score,210,300);
    textSize(20);
    text("Nice try! If you want to have another chance press SPACE.",130,350);
    if(keyIsDown(32))
    {
      gameState="PLAY";
      turn=0;
      score=0;
    }
  }
  textSize(30);
  if (gameState==="PLAY"){
    for(var a=20;a<=300;a+=100){
      fill(255);
      text("500",a,420);
    }
    for(var a=325;a<=500;a+=100){
      fill(255);
      text("100",a,420);
    } 
    for(var a=525;a<=750;a+=100){
      fill(255);
      text("200",a,420);
    } 
  }
}
function mousePressed(){
  if(turn<=5)
  {
    turn++;
    particles=new Particle(mouseX,30,10);
  }
}

function calculateScore(){

}