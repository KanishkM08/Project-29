const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  createCanvas(800,800);
  createSprite(400, 200, 50, 50);

  Stand1 = new Ground(400, 400, 200, 10);
  block1 = new Box(300, 215, 30, 40);
  block2 = new Box(330, 215, 30, 40);
  block3 = new Box(390, 215, 30, 40);
  block4 = new Box(420, 215, 30, 40);
  block5 = new Box(450, 215, 30, 40);
  block6 = new Box(490, 215, 30, 40);
  block7 = new Box(520, 215, 30, 40);

  block8 = new Box(330, 235, 30, 40);
  block9 = new Box(360, 235, 30, 40);
  block10 = new Box(390, 235, 30, 40);
  block11 = new Box(420, 235, 30, 40);
  block12 = new Box(450, 235, 30, 40);

  block13 = new Box(360, 195, 30, 40);
  block14 = new Box(390, 195, 30, 40);
  block15 = new Box(420, 195, 30, 40);

  block16 = new Box(390, 155, 30, 40);

  stone = new Paper(200, 200, 30);
}

function draw() {
  background("red");  



  Stand1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block15.display();
  stone.display();


  drawSprites();
}


function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
  Slingshot.fly();
}

