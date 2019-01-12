class Board {
  constructor() {
    this.tiles = [];
    this.xscore = [];
    this.yscore = [];
    this.xbombs = [];
    this.ybombs = [];
    this.setupPieces();
  }

  setupBoard() {
      for (var i = 0; i<5; i++){
        for (var j = 0; j<5; j++){

          var rand = RNG();
          this.tiles.push(new Tile(i, j, rand ));

          if (rand == 0){
                this.xbombs[i]++;
                this.ybombs[j]++;
          }
          else{
            this.xscore[i] = this.xscore[i]+rand;
            this.yscore[j] = this.yscore[j]+rand;
          }

        }
      }
  }

  RNG(){
    var rand = ( Math.floor((Math.random() * 25) + 1) );
    if (rand < 10){
      return 0;
    }
    else if (rand<13){
      return 2;
    }
    else if (rand<18){
      return 3;
    }
    else{
      return 1;
    }
  }
}
