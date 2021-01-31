
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var stone1,hammer1,rubber1,plane1,iron1;
var world;
var sand1,sand2,sand3,sand4,sand5,sand6;

function setup() {
 
 createCanvas(1600, 600);

	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
  stone1 = new stone(300,300,50,50);
 plane1 = new Plane(400,600,2600,50);
 hammer1 = new Hammer(200,300,100,20);
 rubber1= new rubber(300,100,68);
 sand1= new sand(400,100,10);
 sand2= new sand(500,100,10);
 sand3= new sand(600,100,10);
 sand4= new sand(700,100,10);
 sand5= new sand(800,100,10);
 sand6= new sand(900,100,10);
 iron1= new iron(1000,100,70,70)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
 
  rubber1.display();
  stone1.display();
  plane1.display();
 hammer1.display();
 sand1.display(); 
 sand2.display(); 
 sand3.display(); 

 sand4.display(); 
 sand5.display(); 
 sand6.display(); 
iron1.display();

}

