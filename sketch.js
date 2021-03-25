const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myengine,myworld;
var box1;

function setup() {
  createCanvas(800,800);
  //createSprite(400, 200, 50, 50);

  myengine = Engine.create();
  //myworld is myengine's world
  myworld = myengine.world;

  var options = {
    isStatic : true
  }
box1 = Bodies.rectangle(200, 100, 100, 100,options);
World.add(myworld,box1);
console.log(box1);

  Engine.run(myengine);
}

function draw() {
  background(255,255,255);  

  rectMode(CENTER);
  rect(box1.position.x,box1.position.y,100,100);
  //drawSprites();
}