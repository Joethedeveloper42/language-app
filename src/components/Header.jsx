import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
        <header className="App-header">
          <ul className="d-flex justify-content-center px-0">
            <li>Words</li>
            <li>Idioms</li>
          </ul>
        </header>
    );
  }
}

export default Header;
