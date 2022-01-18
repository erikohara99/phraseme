import './App.css';
import Guesses from './components/Guesses';
import Input from './components/Input';
import React from 'react';

class App extends React.Component {
  state = {
    letters: [[0,0,3,0,0],["c","a",0,"b",0],["a","c","b","f","b"],[0,0,0,0,0],[0,8,0,0,0],["a","c","b","d","b"]],
    word: "acbdb",
    count: 0
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const input = document.getElementById("input").value;
    var letters = this.state.letters;
    const word = this.state.word;
    const count = this.state.count;
    for(let i = 0; i < word.length; i++) {
      letters[count][i] = input[i];
    }
    this.setState({letters});
    this.setState({count: count+1});
    return;
  }

  render() { 
    return(
    <div className="content">
      <div className="guesses">
        <Guesses letters={this.state.letters} word={this.state.word} count={this.state.count} />
      </div>
      <Input onSubmit={this.handleSubmit} />
    </div>
    );
  }
}
 
export default App;
