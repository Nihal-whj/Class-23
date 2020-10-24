class Box
{
    constructor(x,y,width,height)
    {
        var box_options={
            restitution:0.5
        }
        this.body=Bodies.rectangle(x,y,width,height,box_options);
        this.height=height;
        this.width=width;
        World.add(world,this.body)
    }
    display()
    {
        var angle=this.body.angle;
        push();
        rotate(angle);
        fill(255)
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        pop();
    }
}  



