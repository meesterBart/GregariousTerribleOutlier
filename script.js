//1e aanpassing
//3e aanpassing
let colorlist = ['gold', 'yellow', 'turquoise', 'red']
//6e aanpassing
//7e aanpassing
function setup() {
  // commentaar
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  // commentaar
  noStroke()
  fill(random(colorlist));
  ellipse(mouseX, mouseY, 25, 25);
}

/*
The code below will change
the heading with id = "myH"
and the paragraph with id = "myP"
in my web page:
*/
