class Tile {
  // constructor(x,y,value){
  constructor(i,j,w){
    // this.matrixPosition = createVector(x, y);
    // this.pixelPosition = createVector(x * tileSize + tileSize / 2, y *tileSize + tileSize / 2);

    this.revealed = false;

    this.flagged = false;

    // this.value = 1;
    this.value = 1;
    // if(random(1)<0.3){
    //   this.value = 0;
    // }
    // else{
    //   this.value = 1;
    // }

    this.i = i;
    this.j = j;
    this.w = w;

    this.x = i*w;
    this.y = j*w;

    this.side = false;
    this.sidescore = 0;
    this.sidebombs = 0;
  }

  flag(){
    this.flagged = true;
  }

  show() {
      if (this.revealed){
        // fill(190,132,130);
        // rect(this.x, this.y, this.w, this.w);
        // if(this.value == 0){
        //
        // }
        // else{
          fill(186,135,131);
          rect(this.x, this.y, this.w, this.w);
          textAlign(CENTER);
          fill(0);
          text(this.value, this.x+this.w*0.5, this.y+this.w*0.5);
        // }
      }
      else if (this.flagged){
        if ((this.i + this.j) % 2 == 1){
          fill(47,152,112);
          rect(this.x, this.y, this.w, this.w);
          fill(23,127,92);
          triangle(this.x,this.y+this.w,this.x+this.w,this.y+this.w,this.x+this.w*0.5,this.y);
        }
        else{
          fill(23,127,92);
          rect(this.x, this.y, this.w, this.w);
          fill(47,152,112);
          triangle(this.x,this.y+this.w,this.x+this.w,this.y+this.w,this.x+this.w*0.5,this.y);
        }
      }
      else{
        // for (var i = 0; i < 6; i++) {
        //   for (var j = 0; j < 6; j++) {
        //     if ( (i == 5) || (j == 5) ){
        //       fill(46,139,244);
        //     }
        //     else if ((i + j) % 2 == 1) {
        //       fill(47,152,112);
        //     } else {
        //       fill(23,127,92);
        //     }
        //     rect(i*this.w, j*this.w, this.w, this.w);
        //   }
        // }
          if ( (this.i == 5) || (this.j == 5) ){
            fill(46,139,244);
            rect(this.x, this.y, this.w, this.w);
            textAlign(CENTER);
            fill(0);
            text(this.sidescore, this.x+this.w*0.5, this.y+this.w*0.25);
            text(this.sidebombs, this.x+this.w*0.5, this.y+this.w*0.75);
          }
          else if ((this.i + this.j) % 2 == 1) {
            fill(47,152,112);
            rect(this.x, this.y, this.w, this.w);
          } else {
            fill(23,127,92);
            rect(this.x, this.y, this.w, this.w);
          }
      }
  }

  reveal(){
    this.revealed = true;
  }

  contains(x,y){
    return( (x > this.x && x< this.x+this.w) && (y>this.y && y<this.y+this.w) );
  }

  passInfo(score, bombs){
      this.side = true;
      this.sidescore = score;
      this.sidebombs = bombs;
  }
}
