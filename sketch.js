var fixed,moving



function setup() {
  createCanvas(800,400);
 fixed  = createSprite(400, 200, 50, 50);
 moving = createSprite(mouseX,mouseY,82,19);

 fixed.shapeColor = "red"
 moving.shapeColor = "red"
 fixed.debug = true
 moving.debug = true
}

function draw() {
  background(255,255,255);  
if(moving.x - fixed.x < moving.width/2 + fixed.width/2
  && fixed.x - moving.x < moving.width/2 + fixed.width/2  
  && moving.y - fixed.y < moving.height/2 + fixed.height/2
    && fixed.y - moving.y < moving.height/2 + fixed.height/2 ){
  fixed.shapeColor = "green"
  moving.shapeColor = "green"
                  
}
else {
  fixed.shapeColor = "red"
  moving.shapeColor = "red"

}
 moving.x = mouseX
moving.y = mouseY
  drawSprites();
}