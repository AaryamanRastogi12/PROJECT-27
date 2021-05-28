
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.Constraint;

function preload() {

}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	Base1 = new Base(width / 2, 50, width, 50);




	bob1 = new Bob(width / 2, 350, 50);
	bob2 = new Bob(width / 2 - 100, 350, 50);
	bob3 = new Bob(width / 2 + 100, 350, 50);
	bob4 = new Bob(width / 2 - 100, 350, 50);
	bob5 = new Bob(width / 2 + 100, 350, 50);

	chain1 = new Chain(bob1.body, Base1.body, 0, 0);
	chain2 = new Chain(bob2.body, Base1.body, -100, 0);
	chain3 = new Chain(bob3.body, Base1.body, +100, 0);
	chain4 = new Chain(bob4.body, Base1.body, -200, 0);
	chain5 = new Chain(bob5.body, Base1.body, +200, 0);






	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);

	background("lightgreen");
	Engine.update(engine);







	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();

	chain1.display();
	chain2.display();
	chain3.display();
	chain4.display();
	chain5.display();

	Base1.display();

	drawSprites();

}

function keyPressed() {
	if (keyCode === LEFT_ARROW) {

		Matter.Body.applyForce(bob4.body, bob4.body.position, { x: -130, y: 130 });


	}

}