var wall,thickness;
var speed,weight,bullet;

function setup() {
  createCanvas(800,400);
  speed=random(55,90);
  weight=random(400,1500);
  thickness=random(22,83);
 bullet = createSprite(50, 200, 50, 5);
 bullet.velocityX=speed;
 wall = createSprite(700,200,60,height/2);
 wall.shapeColor=color(230,230,230);
}

function draw() {
  background("black");
  
  if(hasCollided(bullet, wall))
  {
  	bullet.velocityX=0;
  	var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);

  	
	if(damage>10)
	{
		wall.shapeColor="red";
		
	}

	

	if(damage<10)
	{
		wall.shapeColor="green";
	}
	
  }


  drawSprites();
 
}


function hasCollided(lbullet, lwall)
{
	bulletRightEdge=lbullet.x +lbullet.width/2;
	wallLeftEdge=lwall.x - lwall.width/2 ;
	if (bulletRightEdge>=wallLeftEdge)
	{
		return true
	}
	return false;
}