function Line(l) {
  this.x = l.mouseX;
  this.y = l.mouseY;
  this.px = l.pmouseX;
  this.py = l.pmouseY;

  this.show = function() {
    strokeWeight(10);
    line(this.x, this.y, this.px, this.py);
  }

  this.toJSON = function() {
    var json = {
      x: this.x,
      y: this.y,
      px: this.px,
      py: this.py,
    };
    return JSON.stringify(json);
  }
}