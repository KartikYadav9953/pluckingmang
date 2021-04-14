
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	m2=new mango(1120, 160, 30);
    m3=new mango(1020, 80, 30);
    m4=new mango(990, 200, 30);
    m5=new mango(920, 170, 30);
    m6=new mango(1190, 200, 40);
	s1=new stone(100, 400)

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

	 slingshot = new chain(s1.body,{x:240, y:420});
	
	Engine.run(engine);

  if(s1.x - mango1.x < s1.width/2 + mango1.width/2
    && s1.y - mango1.y < s1.height/2 + mango1.width/2){

        mango1.isStatic; false

    }

    if(s1.x - m2.x < s1.width/2 + m2.width/2
      && s1.y - m2.y < s1.height/2 + m2.width/2){
  
          m2.isStatic; false
  
      }

  
      if(s1.x - m3.x < s1.width/2 + m3.width/2
        && s1.y - m3.y < s1.height/2 + m3.width/2){
    
            m3.isStatic; false
    
        }

        if(s1.x - m4.x < s1.width/2 + m4.width/2
          && s1.y - m4.y < s1.height/2 + m4.width/2){
      
              m4.isStatic; false
      
          }

          if(s1.x - m5.x < s1.width/2 + m5.width/2
            && s1.y - m5.y < s1.height/2 + m5.width/2){
        
                m5.isStatic; false
        
            }

            if(s1.x - m6.x < s1.width/2 + m6.width/2
              && s1.y - m6.y < s1.height/2 + m6.width/2){
          
                  m6.isStatic; false
          
              }

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  s1.display();
  slingshot.display();

  groundObject.display();
 
  //mouseReleased();

}

function mouseDragged(){
  Matter.Body.setPosition(s1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}