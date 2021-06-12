
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var plane;
var Block1;
var Block2;
var rotator1;
var angle=60;
var angle1=60;
var angle2=60;
var poly;
var ball1;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.4,
    frictionAir:0.02
  }

  var ball1_options ={
    restitution: 0.4,
    frictionAir:0.02
  }

  var ball2_options ={
    restitution: 0.95,
    frictionAir:0.02
  }

  var ball3_options ={
    restitution: 0.95,
    frictionAir:0.02
  }

  var ball4_options ={
    restitution: 0.95,
    frictionAir:0.02
  }
   
   var plane_options ={
     isStatic: true
   };
  
   var Block1_options ={
     isStatic:true
   }

   var Block2_options ={
    isStatic:true
  }
  var rotator1_options ={
    isStatic:true
  }
  var rotator2_options ={
    isStatic:true
  }
  var rotator3_options ={
    isStatic:true
  }


   ball = Bodies.circle(200,10,10,ball_options);
   World.add(world,ball);

   ball1 = Bodies.circle(200,10,10,ball1_options);
   World.add(world,ball1);

   ball2 = Bodies.circle(200,10,10,ball2_options);
   World.add(world,ball2);

   ball3 = Bodies.circle(200,10,10,ball3_options);
   World.add(world,ball3);

   ball4 = Bodies.circle(200,10,10,ball4_options);
   World.add(world,ball4);
  
   plane = Bodies.rectangle(200,390,400,20,plane_options);
  World.add(world,plane);

  Block1 = Bodies.rectangle(100,250,120,20,Block1_options);
  World.add(world,Block1);

  Block2 = Bodies.rectangle(290,250,120,20,Block2_options);
  World.add(world,Block2);

  rotator1 = Bodies.rectangle(200,150,100,20,rotator1_options);
  World.add(world,rotator1);

  rotator2 = Bodies.rectangle(200,150,100,20,rotator2_options);
  World.add(world,rotator2);

  rotator3 = Bodies.rectangle(200,150,100,20,rotator3_options);
  World.add(world,rotator3);


  fill ("red");
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background("green");
  Engine.update(engine);
  
  Matter.Body.rotate(rotator1,angle)
  push ();
  translate (rotator1.position.x,rotator1.position.y);
  rotate (angle);
  rect (0,0,100,20);
  pop ();

  angle +=0.2;

  Matter.Body.rotate(rotator2,angle1)
  push ();
  translate (rotator2.position.x,rotator2.position.y);
  rotate (angle1);
  rect (0,0,100,20);
  pop ();

  angle1 +=0.05;

  Matter.Body.rotate(rotator3,angle2)
  push ();
  translate (rotator3.position.x,rotator3.position.y);
  rotate (angle2);
  rect (0,0,100,20);
  pop ();

  angle2 +=0.1;


  ellipse(ball.position.x,ball.position.y,10);
  ellipse(ball1.position.x,ball1.position.y,10);
  ellipse(ball2.position.x,ball2.position.y,10);
  ellipse(ball3.position.x,ball3.position.y,10);
  ellipse(ball4.position.x,ball4.position.y,10);
  rect(plane.position.x,plane.position.y,400,20);
  rect(Block1.position.x,Block1.position.y,120,20);
  rect(Block2.position.x,Block2.position.y,120,20);
  
  
 


  
  
}

