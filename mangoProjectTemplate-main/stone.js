class stone{
 
    constructor(x, y) {

             this.body = Bodies.circle(x, y, 50);

       World.add(world, this.body);      

       this.image = loadImage("images/stone.png")

    }

display() {

    //var mangoPos=this.body.position;    
    push()
   // translate(mangoPos.x, mangoPos.y);
    // rectMode(CENTER);
    rotate(this.body.angle)
    fill(255,0,255)
    imageMode(CENTER);
    //ellipseMode(CENTER);
    image(this.image, this.body.position.x, this.body.position.y, 60, 60)
    pop()
  

}

}
