import React, { Component } from 'react';

class Italian extends Component {
  
  render() {
    return (
      <div className="text-center">
        <h4>{this.props.language}</h4>
        <p>{this.props.translation}</p>
      </div>
    );
  }
}

export default Italian;
