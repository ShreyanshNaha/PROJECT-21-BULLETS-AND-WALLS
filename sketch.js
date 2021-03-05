var bullet,wall;
var speed,weight,thickness;

function setup() {

  speed = random(223,321);
  weight = random(30,52);
  thickness=random(22,83);

 createCanvas(1600,400);

  bullet = createSprite(50, 200, 30, 10);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);

  
}


function draw() {
  background(0);
bullet.collide(wall);
bullet.velocityX=speed;
bullet.shapeColor="white";
if(hasCollided(bullet,wall)){
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  if(damage>10){
    wall.shapeColor=color(255,0,0);
  }
  if(damage<10){
    wall.shapeColor=color(0,255,0);
  }
bullet.velocityX=0;
}
drawSprites();
}
function hasCollided(lbullet,lwall)
{
  var bulletRightEdge=lbullet.x+lbullet.width;
  var wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}
