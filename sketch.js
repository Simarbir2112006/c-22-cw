const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var bouceoff;
var ball;
var ball2;
var ball3;
function setup(){
    var canvas = createCanvas(1200,1200);

    engine = Engine.create();
    world = engine.world;

    ball_options={
        restitution:1.0
    }

    ball2_options={
        restitution:1.0
    }

    ball3_options={
        restitution:1.0
    }

    ball =  Bodies.circle(1150,100,80,ball_options);
    World.add(world, ball);

    ball2 =  Bodies.circle(550,100,50,ball2_options);
    World.add(world, ball2);

    ball3 =  Bodies.circle(100,100,20,ball3_options);
    World.add(world, ball3);


    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,1190,1200,20,ground_options);
    World.add(world,ground);


    console.log(ground);
}

function draw(){
    background(0);

    Engine.update(engine);

    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,80,80);

    ellipseMode(RADIUS);
    ellipse(ball2.position.x,ball2.position.y,50,50);

    ellipseMode(RADIUS);
    ellipse(ball3.position.x,ball3.position.y,20,20);
}