class Box {
    constructor(x,y,w,h){
        var options={
            restitution:0.8,
            friction:0.8,
            density:0.04,   
        }

        this.body=Bodies.rectangle(x,y,w,h,options);
        this.w=w;
        this.h=h;
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        push()
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        rectMode(CENTER)
        fill("red");
        rect(0,0,this.w,this.h);
        pop()
    }
}