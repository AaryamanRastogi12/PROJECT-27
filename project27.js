
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.Constraint;

function preload() {

}

function setup() {
    createCanvas(800, 700);


    engine = Engine.create();
    world = engine.world;

    //Create the Bodies Here.

    stick1 = new Stick(200, 100, 100, 20);
    World.add(world, stick1);

    stick2 = new Stick(300, 100, 100, 20);
    World.add(world, stick1);

    stick3 = new Stick(400, 100, 100, 20);
    World.add(world, stick1);

    stick4 = new Stick(500, 100, 100, 20);
    World.add(world, stick1);

    stick5 = new Stick(600, 100, 100, 20);
    World.add(world, stick1);



    bob1 = new Bob(200, 400);
    bob2 = new Bob(300, 400);
    bob3 = new Bob(400, 400);
    bob4 = new Bob(500, 400);
    bob5 = new Bob(600, 400);

    chain1 = new Chain(bob1.body, stick1.body);
    chain2 = new Chain(bob2.body, stick2.body);
    chain3 = new Chain(bob3.body, stick3.body);
    chain4 = new Chain(bob4.body, stick4.body);
    chain5 = new Chain(bob5.body, stick5.body);






    Engine.run(engine);

}


function draw() {
    rectMode(CENTER);

    background("lightgreen");
    Engine.update(engine);





    stick1.display();
    stick2.display();
    stick3.display();
    stick4.display();
    stick5.display();

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


    drawSprites();

}

function keypressed() {
    if (keyCode === LEFT_ARROW) {

        Matter.Body.applyForce(bob1.body, bob1.body.position, { x: -130, y: 145 });


    }

}