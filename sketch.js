function setup() {
  createCanvas(windowWidth,windowHeight);
  background(200)
}

function draw() {
  background(0)
  rectMode(CENTER)
  noFill()//不充滿顏色
  stroke("#FF3D00")//框線白色
  for(var j=0;j<width/50;j++)
  {
      for(var i=0;i<width/50;i++)
      {
        ellipse(30+50*i,25+50*j,mouseX/10)
        stroke("#FF3D00")
        rect(25+50*i,25+50*j,mouseY/4)
        stroke("#76FF03")
        ellipse(30+50*i,50+50*j,mouseY/10)
        stroke("#2979FF")
      }

   
  }

}