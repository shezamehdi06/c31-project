class Plinko{
    constructor(x,y){
        super(x,y,50,50);
        
        this.trajectory=[];

       
      }
    
      display() {
        //this.body.position.x = mouseX;
        //this.body.position.y = mouseY;
        
       
        super.display();
        
    if(this.body.position.x>200&&this.body.velocity.x>10){
    
        var position=[this.body.position.x,this.body.position.y];
    
        this.trajectory.push(position);
    }
        for(var i=0;i<this.trajectory.length;i++){
          image(this.image1,this.trajectory[i][0],this.trajectory[i][1]);
        }
      }
    }
    
}