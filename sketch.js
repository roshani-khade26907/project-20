
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let world;
let engine;
var plain;
var block1;
var block2;
var rotator1;
var rotator2;
var rotator3;
var rotator4;
var angle1 = 135;
var angle2 = 90;
var angle3 = 45;
var angle4 = 360;
var particle1;
var particle2;
var particle3;
var particle4;
var particle5;

function preload()
{
	
}

function setup() {
	createCanvas(500, 500);

	var plain_options = {
		isStatic: true
	}

	var block_options = {
		isStatic: true
	}

	var rotator_options = {
		isStatic: true
	}

	var particle_options = {
		restitution: 0.5,
        frictionAir:0.02
	}

	engine = Engine.create();
	world = engine.world;

	//Creating the Bodies.
	plain = Bodies.rectangle(250,480,500,40,plain_options);
	World.add(world,plain);

	block1 = Bodies.rectangle(100,300,100,20,block_options);
	World.add(world,block1);

	block2 = Bodies.rectangle(400,300,100,20,block_options);
	World.add(world,block2);

	rotator1 = Bodies.rectangle(250,200,140,30,rotator_options);
	World.add(world,rotator1);

	rotator2 = Bodies.rectangle(250,200,140,30,rotator_options);
	World.add(world,rotator2);

	rotator3 = Bodies.rectangle(250,200,140,30,rotator_options);
	World.add(world,rotator3);

	rotator4 = Bodies.rectangle(250,200,140,30,rotator_options);
	World.add(world,rotator4);

	particle1 = Bodies.circle(230,10,20,particle_options);
    World.add(world,particle1);

	particle2 = Bodies.circle(260,10,20,particle_options);
    World.add(world,particle2);

	particle3 = Bodies.circle(255,10,20,particle_options);
    World.add(world,particle3);

	particle4 = Bodies.circle(250,10,20,particle_options);
    World.add(world,particle4);

	particle5 = Bodies.circle(245,10,20,particle_options);
    World.add(world,particle5);

	Engine.run(engine);
  
	rectMode(CENTER);
    ellipseMode(RADIUS);
	fill("darkBlue");
}


function draw() {
  

  background("yellow");
  Engine.update(engine);

  Matter.Body.rotate(rotator1,angle1)
  push()
  translate(rotator1.position.x,rotator1.position.y);
  rotate(angle1);
  rect(0,0,150,20);
  pop()
  angle1+=30;

  Matter.Body.rotate(rotator2,angle2)
  push()
  translate(rotator2.position.x,rotator2.position.y);
  rotate(angle2);
  rect(0,0,150,20);
  pop()
  angle2+=30;

  Matter.Body.rotate(rotator3,angle3)
  push()
  translate(rotator3.position.x,rotator3.position.y);
  rotate(angle3);
  rect(0,0,150,20);
  pop()
  angle3+=30;

  Matter.Body.rotate(rotator4,angle4)
  push()
  translate(rotator4.position.x,rotator4.position.y);
  rotate(angle4);
  rect(0,0,150,20);
  pop()
  angle4+=30;

  rect(plain.position.x,plain.position.y,500,40);
  rect(block1.position.x,block1.position.y,100,30);
  rect(block2.position.x,block2.position.y,100,30);
  ellipse(particle1.position.x,particle1.position.y,15);
  ellipse(particle2.position.x,particle2.position.y,15);
  ellipse(particle3.position.x,particle3.position.y,15);
  ellipse(particle4.position.x,particle4.position.y,15);
  ellipse(particle5.position.x,particle5.position.y,15);  

  drawSprites();
 
}



