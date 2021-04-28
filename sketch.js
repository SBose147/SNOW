const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var bg1,bg2;
var snow1 = [];
var snow2 = [];
var snow3 = [];
var snow4 = [];
var snow5 = [];

 function preload()
 {
   bg1 = loadImage("snow2.jpg");
   bg2 = loadImage("snow3.jpg");
 }

function setup() 
{
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  
}

function draw() 
{
  Engine.update(engine);
  
if(keyCode === 32)
{
background(bg2); 
}
else
{
 background(bg1);
}
 
if(keyCode === 32)  
{
  if(frameCount%60 === 0)
  {
    snow1.push(new Snow(random(width/4-30,width/2+10),10,10))
  }
 
  for(var  j = 0; j <snow1.length; j++)
  {
   snow1[j].display();
  }
  if(frameCount%90 === 0)
  {
    snow2.push(new Snow(random(width/5-10,width/2+40),10,20))
  }
 
  for(var  j = 0; j <snow2.length; j++)
  {
   snow2[j].display();
  }
  if(frameCount%30 === 0)
  {
    snow3.push(new Snow(random(20,width-20),10,11))
  }
 
  for(var  j = 0; j <snow2.length; j++)
  {
   snow3[j].display();
  }
  if(frameCount%120 === 0)
  {
    snow4.push(new Snow(random(width/8-30,width),10,12))
  }
 
  for(var  j = 0; j <snow4.length; j++)
  {
   snow4[j].display();
  }
  if(frameCount%90 === 0)
  {
    snow5.push(new Snow(random(width/20-30,width/6+10),10,10))
  }
 
  for(var  j = 0; j <snow5.length; j++)
  {
   snow5[j].display();
  }
} 
  drawSprites();
  
}