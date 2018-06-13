import React, { Component } from 'react';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import Search from './components/Search';

class App extends Component {
  constructor(props){
    super(props);
        this.state = {
            searchText: '',
            searchResults: []
        }
  }
  render() {
    return (
      <div className="App container">
        <Header />
        <Jumbotron />
        <Search />
      </div>
    );
  }
}

export default App;
