import React from 'react';
import FontAwesome from 'react-fontawesome';

const Jumbrotron = () => {
  return (
    <div className="jumbotron text-center">
      <FontAwesome name='language' size='4x' /> 
      <h1 className="display-4">Custom Language App</h1>
      <p className="lead">This is a simple language translator from English to Italian and Chinese</p>
      <hr className="my-2" />
    </div>
  );
}

export default Jumbrotron;