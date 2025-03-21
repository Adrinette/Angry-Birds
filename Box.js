class Box{
    constructor(x,y,width,length){
    var options={
        restitution:0.8, friction:1.0, density:0.8
    }
    this.body = Bodies.rectangle(x,y,width,length,options)
    this.width=width;
    this.length=length;
    World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        var angle= this.body.angle;
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        fill("white")
        stroke("green");
        strokeWeight(4);

        rect(0,0,this.width,this.length)
        pop()
    }
    }
    