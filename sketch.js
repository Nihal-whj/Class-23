const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var box1
var ground

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1=new Box(200,300,50,50);
    ground=new Ground(width/2,380,400,20);
    box2=new Box(240,100,50,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    ground.display();
    box2.display();
}