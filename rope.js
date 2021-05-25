class Rope{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
        pointB:pointB,
        stiffness:1.2,
        length:450,
        }

        this.pointB=pointB;
        this.rope=Matter.Constraint.create(options);
        World.add(world,this.rope);
    }

    display(){
        var posA=this.rope.bodyA.position;
        var pointB=this.pointB;
        push()
        strokeWeight(4);
        line(posA.x,posA.y,pointB.x,pointB.y);
        pop()
    }

}