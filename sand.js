class sand {
  constructor(x, y,radius) {
    var options = {
        'restitution':1.3,
        'friction':5,
        'density':1.0
        }
    this.body = Matter.Bodies.circle(x, y,radius,options);
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(CENTER);

    fill("red");
    ellipse(0, 0, this.radius/2,);
    pop();
  }
};