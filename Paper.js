class Paper{
    constructor(x,y,radius){
        var options={
            restitution:1.0,
            friction:1.0,
            density:1.0,
            isStatic:false
        }
        
        this.body=Bodies.circle(x,y,radius,options);
        this.radius=radius
        World.add(world,this.body)
    }

        display(){
            var pos=this.body.position
           // var angle=this.body.angle
            ellipseMode(CENTER)
            strokeWeight(4)
            stroke("pink")
            fill("pink")
            circle(pos.x,pos.y,this.radius)
            //Matter.Bodies.circle(pos.x,pos.y,radius)
    
    
        }
    }