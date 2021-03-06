import React from 'react';
import '../css/tile.css';

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
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    return e => {
      // if(e.altKey){
      //   this.props.tile.toggleFlag();
      // } else {
      //   this.props.tile.explore();
      // }
      console.log(this.props.pos);
      this.props.updateGame(this.props.tile, this.props.pos, e.altKey);
    };
  }

  getSymbol(){

    if (this.props.tile.explored) {
      if (this.props.tile.bombed) {
        return <span>&#128163;</span>;
      } else {
        const count = this.props.tile.adjacentBombCount();
        return count > 0 ? count : " "
      }
    } else if(this.props.tile.flagged){
      return <span>&#128681;</span>;
    } else {
      return " ";
    }
  }

  render() {
    // console.log(this.props.tile);
    // console.log(this.state);
    return (
      <div className={`tile ${this.state.status}`} onClick={this.handleClick()}>
        {this.getSymbol()}
      </div>
    );
  }
}

export default Tile;