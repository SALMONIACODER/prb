const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var b1

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	b1 =new Dustbin(610,780,200,10)
  b2 =new Dustbin(705,700,10,165)
  b3 =new Dustbin(505,700,10,170)
  b4 =new ground(450,790,1000,10)
  c1=new Paper(25,760,20)
  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  Engine.update(engine)

  b1.display()
  b2.display()
  b3.display()
  b4.display()
  c1.display()

  //console.log(c1)
  drawSprites();
fill(255)
 // text(mouseX +','+mouseY,mouseX,mouseY)
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    console.log("here")
    Matter.Body.applyForce(c1.body, c1.body.position, {x:55, y: -55})
    //Matter.Body.applyForce(c1.body,c1.body.position,{x:85,y:85})
  }
}


