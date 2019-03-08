import React from 'react';
import Board from './board';
import * as Minesweeper from '../minesweeper';

class Game extends React.Component{
  constructor() {
    this.state = {
      board: new Minesweeper.Board()
    };

    this.updateGame = this.updateGame.bind(this);
  }

  updateGame() {

  }

  render() {
    return (
      <
    )
  }
}

export default Game;