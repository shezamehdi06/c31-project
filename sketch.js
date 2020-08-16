function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);

  ground = new Ground(480,800,width,height);
}

var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;

for (var k = 0; k <=width; k = k + 80){
  divisions.push(new Divisions(k, height-divisionsHeight/2, 10, divisionssHeight));
}

for(var j = 40; j<=innerWidth; j=j+50){

  plinkos.push(new Plinko(j,75));
}

for(var j = 15; j <=width-10; j=j+50){
  plinkos.push(new Plinko(j,175));
}

for (var j = 0; j < particles.length; j++){
  particles[j].display();
}

for (var k = 0; k< divisions.length; k++){
  divisions[k].display();
}

function draw() {
  background(255,255,255);
  
  ground.display();
  Plinko1.display();
  Plinko2.display();
  Plinko3.display();
  Plinko4.display();
  Plinko5.display();
  Plinko5.display();
  Plinko6.display();
  Plinko7.display();
  Plinko8.display();
  Plinko9.display();
  Plinko10.display();
  
  drawSprites();
}