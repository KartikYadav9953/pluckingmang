class chain{

    constructor(bodyA, pointB) {

var op={

    bodyA: bodyA,
    pointB: pointB,
    stiffness: 0.04,
    length: 10

}

            this.rubber = Constraint.create(op);

       World.add(world, this.rubber);    

    }
    
    fly(){
        this.rubber.bodyA = null;
    }

display() {

    if(this.rubber.bodyA) {
        line(this.rubber.bodyA.position.x,this.rubber.bodyA.position.y, this.rubber.pointB.x, this.rubber.pointB.y)
    }

    
        
        


    }

}


