class Particle{
    constructor(x,y,w,h){

    this.width=w    
    this.height=h
     this.body = Bodies.circle(x,y,this.releaseEvents,options);
     this.color=color(random(0,255),random(0,255),random(0,255));
     World.add(world,this.body);
    }
}