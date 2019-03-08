import React from 'react';

class Tile extends React.Component {
  constructor(props){
    super(props);

    this.getSymbol = this.getSymbol.bind(this);
  }

  getSymbol(){
    return (
      <span>
        &#128681;
      </span>
    );
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