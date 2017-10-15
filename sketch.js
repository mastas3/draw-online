var db = new Database();
var points;
var lines;
var cleared = false;

function preload() {
  db.load();
  var url ="https://draw-online-82e5e.firebaseio.com/lines.json";
  points = loadJSON(url);
  lines = [];
}

function setup () {
  createCanvas(800, 800);
  points = objToArr(points);
}

function draw() {
  if(db.data) {
    points = objToArr(db.data);
  }
  lines = points.map(l => new Line(l));
  lines.forEach(l => l.show());

  if(mouseIsPressed) {
    points.push({mouseX, mouseY, pmouseX, pmouseY});
    db.save(points);
  }
}

function arrToObj(arr) {
  return arr.reduce((a, c, i) => {
    return a[i] = c;
  }, {});
}

function objToArr(obj){
  var arr = [];
  for(var key in obj) {
    arr.push(obj[key]);
  }
  return arr;
}

document.getElementById('clearScreen').onclick = function() {
  db.clear();
  window.location = '/';
}