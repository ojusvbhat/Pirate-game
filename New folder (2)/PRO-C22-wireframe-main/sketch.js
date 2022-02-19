const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var backgroundImg;
var tower,towerImg;
var angle = 200 ; 
var cannon;
var score =0 ; 


function preload() {
 backgroundImg = loadImage("assets/background.gif");
 towerImg = loadImage("assets/tower.png");
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
 options={
 isStatic:true
 }
 
 ground= Bodies.rectangle(0,height-1, width*2,1,options);
 World.add(world,ground);
 
 tower= Bodies.rectangle(50,200,160,310,options);
 World.add(world,tower);


 cannon = new Cannon(180,110,130,100,angle);
 
 
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);
  text("score:"+score,100,50);
  stroke(255);
 rect(ground.position.x, ground.position.y,width*2,1);
// rect(tower.position.x,tower.position.y,160,310);

image(towerImg,tower.position.x,tower.position.y,160,310);

cannon.show();
   
}
