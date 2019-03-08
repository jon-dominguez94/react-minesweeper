import React from 'react';

class Tile extends React.Component {
  constructor(props){
    super(props);

    this.getSymbol = this.getSymbol.bind(this);
  }

  getSymbol(){
    if(this.props.tile.flagged){
      return <span>&#128681;</span>;
    } else if(this.props.tile.bombed){
      return <span>&#128163;</span>;
    } else if(this.props.tile.explored){
      return this.props.tile.adjacentBombCount();
    } else {
      return " ";
    }
  }

  render() {
    console.log(this.props.tile);
    return (
      <span>
        {this.getSymbol()}
      </span>
    );
  }
}

export default Tile;