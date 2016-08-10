var myRed = 10;
var myGreen = 0;
var myBlue = 255;

function circle(x, y, diameter){
  ellipse(x, y, diameter, diameter);
}  

function setup() {
  createCanvas(640, 460);
  
}

function draw() {
  //ellipse(CENTER);
  //rect(CENTER);
  
  //Body
  //fill(250, 100, 200);
  //rect(230, 145, 20, 50);
  
  //Head
  //ellipse(240, 115, 60, 60);
  
  // Eyes
  //fill(255, 255, 255);
  //ellipse(221, 115, 16, 32);
  //fill(255, 255, 255);
  //ellipse(259, 115, 16, 32);
  
  //Arms
  //stroke(102, 102, 153);
  //line(210, 150, 230, 165);
  //stroke(102, 102, 153);
  //line(250, 195, 260, 205);
  
  //Legs
  //stroke(0, 0, 120);
  
  
  noStroke();
  fill(myRed, myGreen, myBlue);
  ellipse(mouseX, mouseY, 10);
  
  myRed = myRed + 0.5;
  if (myRed > 255) {
    myRed = 0;
  }
  
  myBlue = myBlue - 1;
  if (myBlue <= 0) {
    myBlue = 255
  }
  
  myGreen = myGreen +2; 
  if (myGreen > 200){
  myGreen = 30
  }
  
  //if (mouseIsPressed){
    //fill(255, 255, 255);
    //ellipse(mouseX, mouseY, 100, 100);
    //if(mouseIsPressed '===' false) {
    //fill(myRed, myGreen, myBlue);
  
  for (var i=0; i<=640; i=i+20){
    fill(0);
    ellipse(i, 40, 15);
  }

 
  
}