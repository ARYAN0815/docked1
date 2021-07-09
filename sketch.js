var bg 
var issIMG
var sc1IMG, sc2IMG, sc3Img, sc4IMG
var sc
var iss
var hasDocked=false
function preload(){
bg=loadImage("images/spacebg.jpg")
issIMG=loadImage("images/iss.png")
sc1IMG=loadImage("images/spacecraft1.png")
sc2IMG=loadImage("images/spacecraft2.png")
sc3Img=loadImage("images/spacecraft3.png")
sc4IMG=loadImage("images/spacecraft4.png")
}


function setup() {
  createCanvas(800,700);
  sc=createSprite(285,500,10,10)
  sc.addImage(sc1IMG)
  sc.scale=0.15
  iss=createSprite(330,300,10,10)
  iss.addImage(issIMG)
}
function draw() {
  background(bg);  
if(!hasDocked){
  if(keyDown(LEFT_ARROW)){
    sc.x=sc.x-2
    sc.addImage(sc3Img)
    }
    if(keyDown(RIGHT_ARROW)){
    sc.x=sc.x+2
    sc.addImage(sc4IMG)
    }
    if(keyDown(UP_ARROW)){
    sc.y=sc.y-2
    sc.addImage(sc2IMG)
    }
    if(keyDown(DOWN_ARROW)){
    sc.addImage(sc1IMG)
    }
}
if(sc.y<=(iss.y+70)&& sc.x<=(iss.x-10)){
hasDocked=true
textSize(25)
fill("white")
text("Docked Successfully",400,500)
}



  drawSprites();
}