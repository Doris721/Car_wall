const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var car,wall;
var speed,weight;

function setup(){
    var canvas = createCanvas(1600,400);
    
    engine = Engine.create();
    world = engine.world;
 
  speed=random(55,90);
  weight=random(400,1500);
  
var car_options={
  isStatic: false
}

  car=Bodies.cirlce(50, 200, 50, ball_options);
  World.add(world,car);
  car.velocityX=speed;

var wall_options={
  isStatic=true
}

  wall=Bodies.rectangle(1500,200,60,height/2,wall_options);
  wall.shapeColor=color(80,80,80);
  World.add(world,wall);

  if(wall.x-car.x<(car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation=0.5 * weight * speed* speed/22509;
    if(deformation>180)
    {
      car.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100)
    {
      car.shapeColor=color(230,230,0);
    }
    if(deformation<100)
    {
      car.shapeColor=color(0,255,0);
    }
  }
}

function draw(){
    background(255,255,255);
    Engine.update(engine);
    ellipseMode(RADIUS);
    ellipse(car.position.x,car.position.y,20,20)
    rectMode(CENTER);
    rect(wall.position.x,wall.position.y,20,50)
    car.display();
    wall.display();
}






