//Player Business Logic:


export default function Player() {
  this.totalScore = 0; //running score for the player
  this.currentScore = 0; //score for this round
  this.turn = true; // allows switching between players
}

//  let player1 = new Player(0, 0, 0);
//  let player2 = new Player(0, 0, 0);

//  Player.prototype.AddRoundScore = function () {
//  if (this.currentScore != 1) {
//    this.totalScore += this.currentScore;
//  } if (this.currentScore === 1) { 
//    this.roundScore = 0;
//  } else {

//  return this.roundScore;
//  }
//  }

//  Player.prototype.AddTotalScore = function () {
//  if (this.roundscore !== 0) {
//    this.totalScore += this.roundScore;
//  } else {
//  }
//  }

//  Player.prototype.playerTurn = function() {
//  if (player1.turn) {
//    player1.turn = false;
//    player1.turn = true;
//  }else{
//    player2.turn = true;
//    player2.turn = false;
//    //player1Card.style.display = "none";
//   // player2Card.removeAttribute("style");
//  }
//  }

//  Player.prototype.BigRoller = function (player1TotalScore, player2TotalScore) {
//    if (newPlayer1.totalScore >= 100) {
//      return "player 1 is a Big Roller!";
//    } else if (newPlayer2.totalScore >= 100) {
//      return "player 2 is a Big Roller!";
//   } else {
//   }
//  }