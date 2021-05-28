class Bob {
    constructor(x, y,r) {
        var options = {
            isStatic: false,
            restitution: 1.0,
            friction: 0,
            density: 0.8,
          

        }
        this.body = Bodies.circle(x, y, r, options)
        World.add(world, this.body);
        this.r = 2*r;
    }
    display() {

        push();
        translate(this.body.position.x,this.body.position.y);
        ellipseMode(CENTER);
        fill("yellow");
        ellipse(0,0, this.r,this.r);
        pop();
    }
}

