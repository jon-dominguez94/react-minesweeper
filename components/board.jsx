import React from 'react';
import Tile from './tile';

class Board extends React.Component {
  render(){

    const board = this.props.board.grid.map((row, i) => {
      return (
        <div className="flex" key={i}>
          {
            row.map((tile, j) => {
              return <Tile key={[i,j]} pos={[i,j]} tile={tile} updateGame={this.props.updateGame} />
            })
          }
        </div>
      )
    });
    // console.log(this);

    return(
      <div className="flex board">
        {board}
      </div>
    );
  }
}

export default Board;