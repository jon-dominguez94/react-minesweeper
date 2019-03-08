import React from 'react';
import Board from './board';
import * as Minesweeper from '../minesweeper';

class Game extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      board: new Minesweeper.Board(10, 10)
    };

    this.updateGame = this.updateGame.bind(this);
  }

  updateGame() {

  }

  render() {
    return (
      <Board updateGame={this.updateGame} board={this.state.board} />
    );
  }
}

export default Game;