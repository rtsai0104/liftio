import React, {Component} fron 'react';

class Sets extends Component{
  render(){
    const {sets} = this.props;
    const setList = sets.map(set => {
      return (
      <div className="App" key={set.id}>


      </div>
      )
    })
  }
}
