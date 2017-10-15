function Database() {
  this.fb = firebase;
  this.ref = this.fb.app().database().ref();
  this.linesRef = this.ref.child('lines');
  this.data = {};

  this.load = () => {
    this.linesRef.on('value', (snap) => {
      this.data = objToArr(snap.val());
    })    
  }

  this.save = (data) => {
    this.linesRef.push(arrToObj(data))
  }

  this.clear = () => {
    this.linesRef.set(null)
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