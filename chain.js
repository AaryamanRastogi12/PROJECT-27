class Chain{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.string=Matter.Constraint.create(options);
        World.add(world,this.string);
    }
    display(){
      var pointA=this.string.bodyA.position;
      var pointB=this.string.bodyB.position;
      push();
      strokeWeight(3);
      stroke(color(244,244,244));
      line(pointA.x,pointA.y-50,pointB.x+this.offsetX,pointB.y+this.offsetY);
      pop();
    }
}