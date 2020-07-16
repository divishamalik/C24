class BaseClass{
    constructor(x,y,width,height,angle){
        var options={
            'density': 0.9,
            'friction' :1,
            'restitution':0.8
        }
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    World.add(world,this.body);
    }
    display(){
        var p=this.body.position;
        push();
        rectMode(CENTER);
        translate(p.x,p.y);
        rotate(this.body.angle);
        fill(255);
        rect(0,0,50,50);
        pop();
    }
}