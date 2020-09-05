class Tree{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.height=height;
        this.width=width;
        this.body=Bodies.rectangle(x,y,(this.width-100)/5,(this.height-100)/5,options);
        this.image=loadImage("Plucking+mangoes/Plucking mangoes/tree.png");
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        translate(0,0);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
        pop();
    }
}