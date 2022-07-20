import Player from './../src/js/player.js';

describe('Player', () => {

  test('when iterated it should create a new object with 3 properties: total score, current score and turn, set to 0, 0, and true respectively.', () => {
    const player1 = new Player();
    expect(player1.totalScore).toEqual(0);
    expect(player1.currentScore).toEqual(0);
    expect(player1.turn).toEqual(true);
  });

});