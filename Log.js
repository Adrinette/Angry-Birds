class Log{
    constructor(x,y,length,angle){
    var options={
        restitution:0.8, friction:0.8, density:1.0
    }
    this.body = Bodies.rectangle(x,y,20,length,options)
    this.width=20;
    this.length=length;
    Matter.Body.setAngle(this.body,angle)
    World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        var angle= this.body.angle;
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        fill("darkgreen")
        stroke("green");
        strokeWeight(4);

        rect(0,0,this.width,this.length)
        pop()
    }
    }
    