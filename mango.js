class Mango{
    constructor(x,y,radius){
        var options={
            isStatic:true,
            restitution:0,
            friction:1
        }
        this.radius=radius;
        this.body=Bodies.circle(x,y,(this.radius-50)/2,options);
        this.image=loadImage("Plucking+mangoes/Plucking mangoes/mango.png");
        World.add(world,this.body);
    }
    display(){
     var pos=this.body.position;
     push();
     translate(pos.x,pos.y);
     imageMode(CENTER);
     image(this.image,0,0,this.radius,this.radius);
     pop();
    }
}