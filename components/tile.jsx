import React from 'react';
import '../css/tile.scss';

class Tile extends React.Component {
  constructor(props){
    super(props);

    function getStatus(){
      if(props.tile.bombed){
        return "bombed";
      } else if(props.tile.flagged){
        return "flagged";
      } else if(props.tile.explored){
        return "explored";
      } else {
        return "";
      }
    }

    this.state = {
      status: getStatus()
    };

    this.getSymbol = this.getSymbol.bind(this);
  }

  getSymbol(){
    if(this.props.tile.flagged){
      return <span>&#128681;</span>;
    } else if(this.props.tile.bombed){
      return <span>&#128163;</span>;
    } else if(this.props.tile.explored){
      const count = this.props.tile.adjacentBombCount();
      return count > 0 ? count : " "
    } else {
      return "_";
    }
  }

  render() {
    console.log(this.props.tile);
    console.log(this.state);
    return (
      <div className={`tile ${this.state.status}`}>
        {this.getSymbol()}
      </div>
    );
  }
}

export default Tile;