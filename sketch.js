





let bubbles = [];


function setup() {
createCanvas(600,600);
background(0);


      }



function draw() {
  background(0);

  for (let g = 0; g < bubbles.length; g++){
  bubbles[g].goster();
  bubbles[g].move();
  }

  tus();

}

function Bubble(q, r) {

  this.hx = 20;
  this.hy = 20;
  this.x = q;
  this.y = r;

  this.goster = function(){

    let renk = [255, 100, 140, 0];

      stroke(255);
      let renkseck = floor(random(0,3));
      let renksecm = floor(random(0,3));
      fill(renk[renkseck], 0, renk[renksecm], 170);

      ellipse(this.x, this.y, this.hx, this.hy);
    },

    this.move = function(){
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }
}



function mousePressed(){
  bubbles.push(new Bubble(mouseX, mouseY));

  if((mouseX > width - 80) && (mouseX < width - 10) && (mouseY > height - 40) && (mouseY < height-10)){

    bubbles.splice(0, bubbles.length);

      //Kutunun içindeyse, splice her şey.
  }



}


function mouseDragged(){

  bubbles.push(new Bubble(mouseX, mouseY));
}



function tus(){

  if((mouseX > width - 80) && (mouseX < width - 10) && (mouseY > height - 40) && (mouseY < height-10)){
    var tusrenk = 100
    stroke(255);
    fill(tusrenk);
    rect(width - 80, height - 40, 70, 30);

    stroke(255)
    fill(255)
    textSize(20)
    text('clear', width - 67, height - 18);

  } else {
    tusrenk = 200

    stroke(255);
    fill(tusrenk);
    rect(width - 80, height - 40, 70, 30);

    stroke(200)
    fill(200)
    textSize(20)
    text('clear', width - 67, height - 18);
  }



}
