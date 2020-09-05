
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var tree,boy,boyImg;
var slingshot;

function preload()
{
  boyImg=loadImage("Plucking+mangoes/Plucking mangoes/boy.png");
  gardenImg=loadImage("Plucking+mangoes/Plucking mangoes/garden.png");
}

function setup() {
	createCanvas(1100, 800);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
    tree=new Tree(750,400,500,600);
    ground=new Ground(550,700,1100,20);
    stone=new Stone(120,500,50,50);
    

    slingshot=new Catapult(stone.body,{x:120,y:525});
    mango1=new Mango(700,200,60);
    mango2=new Mango(700,350,60);
    mango3=new Mango(800,300,60);
    mango4=new Mango(850,200,60);
    mango5=new Mango(600,300,60);
    mango6=new Mango(900,300,60);
    mango7=new Mango(750,250,60);
    mango8=new Mango(800,150,60);
    mango9=new Mango(675,300,60);
    mango10=new Mango(950,350,60);
    mango11=new Mango(850,280,60);
    mango12=new Mango(790,240,60);

}


function draw() {
  rectMode(CENTER);
  background(gardenImg);

  Engine.update(engine);
  //mouseDragged();
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
  detectCollision(stone,mango11);
  detectCollision(stone,mango12);
  
  image(boyImg,80,420,200,380);
  drawSprites();
  tree.display();
  ground.display();
  stone.display();
  slingshot.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();

}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function detectCollision(tstone,tmango){
  stonebodyposition=tstone.body.position;
  mangobodyposition=tmango.body.position;
  var distance=dist(stonebodyposition.x,stonebodyposition.y,mangobodyposition.x,mangobodyposition.y);
  if(distance<=120){
    Matter.Body.setStatic(tmango.body,false);
  }
}

function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(stone.body,{x:120,y:525});
    slingshot.attach(stone.body);
  }
}



