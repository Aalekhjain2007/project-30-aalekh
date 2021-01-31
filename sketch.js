const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22
var box23,box24,box25,box26,box27,box28,box29,box30,box31,box32
var stand1
var polygon1
var slingshot


function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;

    stand1=new Stand(380,300,270,5)
    stand2=new Stand(750,160,270,5)
    
  

    box1=new Box(280,275,30,40)
    box2=new Box(310,275,30,40)
    box3=new Box(340,275,30,40)
    box4=new Box(370,275,30,40)
    box5=new Box(400,275,30,40)
    box6=new Box(430,275,30,40)
    box7=new Box(460,275,30,40)
    box8=new Box(490,275,30,40)

    box9=new Box(310,235,30,40)  
    box10=new Box(340,235,30,40)
    box11=new Box(370,235,30,40)
    box12=new Box(400,235,30,40)
    box13=new Box(430,235,30,40)
    box14=new Box(460,235,30,40)

    box15=new Box(340,195,30,40)
    box16=new Box(370,195,30,40)
    box17=new Box(400,195,30,40)
    box18=new Box(430,195,30,40)

    box19=new Box(355,155,30,40)
    box20=new Box(415,155,30,40)
    box21=new Box(385,155,30,40)

    box22=new Box(385,115,30,40)
    
    box23=new Box(670,136,30,40)
    box24=new Box(700,136,30,40)
    box25=new Box(730,136,30,40)
    box26=new Box(760,136,30,40)
    box27=new Box(790,136,30,40)

    box28=new Box(700,96,30,40)
    box29=new Box(730,96,30,40)
    box30=new Box(760,96,30,40)

    box31=new Box(720,56,30,40)
    box32=new Box(750,56,30,40)

   
    polygon1=new Polygon(50,200,40,40)
  
    slingshot = new SlingShot(polygon1.body,{x:120,y:200});
    

}

function draw(){
   Engine.update(engine);
   background("red")

  stand1.display();
  stand2.display();

   fill("purple")
   box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   box6.display();
   box7.display();
   box8.display();
   fill("green")
   box9.display();
   box10.display();
   box11.display();
   box12.display();
   box13.display();
   box14.display();
   fill("blue")
   box15.display();
   box16.display();
   box17.display();
   box18.display();
   fill("pink")
   box19.display()
   box20.display();
   box21.display()
   fill("orange")
   box22.display();


    fill("yellow")
   box23.display();
   box24.display();
   box25.display();
   box26.display();
   box27.display();

   fill("lightblue")
   box28.display();
   box29.display();
   box30.display();
   
   fill("lightgreen")
   box31.display();
   box32.display();

   
    stroke(30)
    fill("orange")
   text("drag the line to hit the box",600,300)
   fill("blue")
   stroke(5)
   text("press space key to get a second chance",600,350)
  
   polygon1.display();
   slingshot.display();
  
}

function mouseDragged(){
    Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode===32){
        slingshot.attach(polygon1.body)

    }
}