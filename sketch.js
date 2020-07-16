const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var ground;
var box2;
var box3;
var box4;
var box5;
var pig1,pig2;
var bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    ground= new Ground(600,380,1200,20);
    box2= new Box(920,320,70,70);
    box3= new Box(700,240,70,70);
    box4= new Box(920,240,70,70);
    box5= new Box(810,160,70,70);
    bird= new Bird(200,100);
    pig1= new Pig(810,350);
    pig2= new Pig(810,220);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    ground.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    bird.display();
    pig1.display();
    pig2.display();
   
}