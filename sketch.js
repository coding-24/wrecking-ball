const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;

var engine, world;


function preload() {

}

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,500,1200,20)
    box1=new Box (900,450,70,70);
    box2=new Box (900,380,70,70);
    box3=new Box (900,310,70,70);
    box4=new Box (900,250,70,70);
    box5=new Box (900,180,70,70);
    
    ball1=new ball(200,200,80,80);
   rope=new Rope(ball1.body,{x:750,y:50});

}

function draw(){
    background("black");
    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ball1.display();
    rope.display();
}
