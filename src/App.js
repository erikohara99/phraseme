import './App.css';
import Guesses from './components/Guesses';
import Input from './components/Input';
import React from 'react';

class App extends React.Component {
  state = {
    letters: [["-","-","-","-","-"],["-","-","-","-","-"],["-","-","-","-","-"],["-","-","-","-","-"],["-","-","-","-","-"], ["-","-","-","-","-"]],
    word: "acbdb",
    count: 0
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const input = document.getElementById("input").value.toUpperCase();
    var letters = this.state.letters;
    const word = this.state.word;
    const count = this.state.count;

    if(input.length !== word.length) return;

    for(let i = 0; i < word.length; i++) {
      letters[count][i] = input[i];
    }

    console.log(letters[count]);

    this.setState({letters});
    this.setState({count: count+1});

    if(count === letters.length - 1){
      document.getElementById("input").disabled = true;
      return;
    }
    document.getElementById("input").value = "";
    return;
  }

  render() { 
    return(
    <div className="content">
      <div className="guesses">
        <Guesses letters={this.state.letters} word={this.state.word} count={this.state.count} />
      </div>
      <Input onSubmit={this.handleSubmit} word={this.state.word}/>
    </div>
    );
  }
}
 
export default App;
