
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
var engine, world
var G1, B1, R1, B2, R2, B3, R3, B4, R4, B5, R5

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(800, 800);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	G1 = new Ground(300,50,600,25);

	B1 = new Bob(300,200,50);
	R1 = new Rope(B1.body,G1.body,0,0);

	B2 = new Bob(200,200,50);
	R2 = new Rope(B2.body,G1.body,-100,0);

	B3 = new Bob(100,200,50);
	R3 = new Rope(B3.body,G1.body,-200,0);

	B4 = new Bob(400,200,50);
	R4 = new Rope(B4.body,G1.body,100,0);

	B5 = new Bob(500,200,50);
	R5 = new Rope(B5.body,G1.body,200,0);
	
}



function draw() {
  rectMode(CENTER);
  background("pink");
  Engine.update(engine);

  G1.display();
  
 
  R1.display();
  R2.display();
  R3.display();
  R4.display();
  R5.display();

  B1.display();
  B2.display();
  B3.display();
  B4.display();
  B5.display();

  console.log(B3.body.position.x);
  
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(B3.body, B3.body.position, {x:-145, y: -45 });
		/*Body.setStatic(B3.body,false)
		Body.setStatic(B2.body,false)
		Body.setStatic(B1.body,false)
		Body.setStatic(B4.body,false)
		Body.setStatic(B5.body,false)*/

	}
}


