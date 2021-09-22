class Bob {

    constructor(x,y,radius){
        this.radius = radius;
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(x,y,radius,{
            isStatic: false,
            restitution: 1,
            friction: 0,
            density: 0.7
        })
        World.add(world,this.body);
        
      
    }
    display(){
            push();
            translate(this.body.position.x,this.body.position.y);
            fill("purple");
            ellipseMode(CENTER);
            ellipse(0,0,this.radius,this.radius);
            pop();
    }
    
    }