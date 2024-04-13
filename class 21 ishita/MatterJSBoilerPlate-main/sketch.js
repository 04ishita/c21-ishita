var ground;
var ball;
var leftSide;
var rightSide;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
//ball display  
var ball_options={
isStatic:false,
restitution:1,
friction:0,
density:1.2
}
//circle body 


	engine = Engine.create();
	world = engine.world;
	ball=Bodies.circle(200,100,20,ball_options);
	World.add(world,ball);
	ellipseMode(RADIUS)
	//Create the Bodies Here.
ground= new Ground(width/2,670,width,20)
leftSide = new Ground(1100,600,20,120)


	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()
 //ground.show()
ellipse(ball.position.x,ball.position.y,20);
leftSide.display()
Engine.run(engine);
  
 
}

