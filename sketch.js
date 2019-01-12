var grid;
var cols;
var rows;

var bombTotal = 13;
var twoTotal = 5;
var threeTotal = 3;

var tilesize = 100;

function setup(){
  createCanvas(600,600);
  cols = floor(width/tilesize);
  rows = floor(height/tilesize);
  grid = make2DArray(cols, rows);
  for (var i = 0; i<cols; i++){
    for (var j = 0; j<rows; j++){
      grid[i][j] = new Tile(i,j,tilesize);
    }
  }
  tileGeneration();
  populateCounts();
}

function tileGeneration(){
  //populate 2s
  for (var n = 0; n < twoTotal; n++){
    var i = floor(random(cols-1));
    var j = floor(random(rows-1));
    while(grid[i][j].value != 1){
      var i = floor(random(cols-1));
      var j = floor(random(rows-1));
    }
    grid[i][j].value = 2;
  }
  //populate 3s
  for (var n = 0; n < threeTotal; n++){
    var i = floor(random(cols-1));
    var j = floor(random(rows-1));
    while(grid[i][j].value != 1){
      var i = floor(random(cols-1));
      var j = floor(random(rows-1));
    }
    grid[i][j].value = 3;
  }
  //populate bombs
  for (var n = 0; n < bombTotal; n++){
    var i = floor(random(cols-1));
    var j = floor(random(rows-1));
    while(grid[i][j].value != 1){
      var i = floor(random(cols-1));
      var j = floor(random(rows-1));
    }
    grid[i][j].value = 0;
  }
}

function draw(){
  background(100);
  for (var i = 0; i<cols; i++){
    for (var j = 0; j<rows; j++){
      grid[i][j].show();
    }
  }
}

function populateCounts(){
  this.xscore = new Array(rows-1);
  this.yscore = new Array(rows-1);
  this.xbombs = new Array(cols-1);
  this.ybombs = new Array(cols-1);

  for (var i = 0; i<rows-1; i++){
    xscore[i] = 0;
    yscore[i] = 0;
    xbombs[i] = 0;
    ybombs[i] = 0;
  }

  for (var i = 0; i<cols-1; i++){
    for (var j = 0; j<rows-1; j++){
      if (grid[i][j].value == 0){
        xbombs[i]++;
        ybombs[j]++;
      }
      else{
        xscore[i]+= grid[i][j].value;
        yscore[j]+= grid[i][j].value;
      }
    }
  }

  // console.log("x");
  for (var i = 0; i<cols-1; i++){
    // console.log("---");
    // console.log(xscore[i]);
    // console.log(xbombs[i]);
    grid[i][5].passInfo(xscore[i],xbombs[i]);
  }
  // console.log("y:");
  for (var i = 0; i<cols-1; i++){
    // console.log("---");
    // console.log(yscore[i]);
    // console.log(ybombs[i]);
    grid[5][i].passInfo(yscore[i],ybombs[i]);
  }

}

function mousePressed(){
  if (mouseButton == LEFT){
    for (var i = 0; i<cols-1; i++){
      for (var j = 0; j<rows-1; j++){
        if(grid[i][j].contains(mouseX, mouseY)){
          grid[i][j].reveal();
          if (grid[i][j].value == 0){
            gameOver();
          }
        }
      }
    }
  }
  else if (mouseButton == RIGHT){
    for (var i = 0; i<cols; i++){
      for (var j = 0; j<rows; j++){
        if(grid[i][j].contains(mouseX, mouseY)){
          grid[i][j].flag();
        }
      }
    }
  }
}

function gameOver(){
  for (var i = 0; i<cols-1; i++){
    for (var j = 0; j<rows-1; j++){
      grid[i][j].revealed= true;
    }
  }
}

function make2DArray(cols,rows){
    var arr = new Array(cols);
    for (var i = 0 ; i<arr.length; i++){
      arr[i] = new Array(rows);
    }
    return arr;
}
