import React, { Component } from 'react';

class Chinese extends Component {
  
  render() {
    return (
      <div className="text-center">
        <h4>{this.props.language}</h4>
        <p>{this.props.translation}</p>
        <p>{this.props.pinyin}</p>
      </div>
    );
  }
}

export default Chinese;