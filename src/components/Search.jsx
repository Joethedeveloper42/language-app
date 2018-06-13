import React, { Component } from 'react';
import axios from 'axios';
import { debounce } from 'throttle-debounce';
import Italian from './Italian';
import Chinese from './Chinese';

const api_base_url = 'https://translate.yandex.net/api/v1.5/tr.json/translate?key='
const api_key = 'trnsl.1.1.20180613T085337Z.7df43fbe334422f3.88d7c0233f5a483cae5b79d34ffeeeb2e80f0893'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      query: '',
      italian: '[Italian translation will appear here]',
      chinese: '[Chinese translation will appear here]',
      pinyin: '[Pinyin translation will appear here]'
    };

    // this.handleInputChange = this.handleInputChange.bind(this);
    this.translateText = debounce(500, this.translateText);
  }

  getPinYin = () => {
    axios.get(`https://glosbe.com/transliteration/api?from=Han&dest=Latin&text=${this.state.chinese}&format=json`)
    .then( res => {
      this.setState({
        pinyin: res.data.text
      })
    })
  }

  translateText = () => {
    axios.all([
      axios.get(`${api_base_url}${api_key}&text=${this.state.query}&lang=it`),
      axios.get(`${api_base_url}${api_key}&text=${this.state.query}&lang=zh`)
    ])
    .then(axios.spread((italian, chinese) => {
      this.setState({ italian: italian.data.text[0], chinese: chinese.data.text[0]})
      this.getPinYin()
    }))
    .catch(error => console.log(error.message))
  }

  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({ 
      query: event.target.value
    }, this.translateText);
  }

  clearQuery = () => {
    this.setState({ 
      query: ''
    })

  }

  render() {

    return (
    <div className="search d-flex flex-column align-items-center mt-4">
        <button className="btn btn-info my-3" onClick={this.clearQuery}>Clear Search Text</button>
        <textarea className="mb-4" type="text"
          value={this.state.query}
          placeholder="Translation will appear automatically below..."
          onChange={this.handleInputChange}
        />
        <Italian language="Italian translation" translation={this.state.italian} />
        <Chinese language="Chinese translation" translation={this.state.chinese} pinyin={this.state.pinyin} />
    </div>
    )
  }
}

export default Search;