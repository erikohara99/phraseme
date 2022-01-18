import './App.css';
import Guesses from './components/Guesses';
import Input from './components/Input';
import React from 'react';

class App extends React.Component {
  state = {
    letters: [["-","-","-","-","-"],["-","-","-","-","-"],["-","-","-","-","-"],["-","-","-","-","-"],["-","-","-","-","-"], ["-","-","-","-","-"]],
    word: "acbdb",
    count: 0,
    obtained: []
  }

  componentDidMount(){
    var obtained = this.state.obtained;
    for(let i in this.state.word) obtained.push("_");
    this.setState({obtained});
}

  handleSubmit = (e) => {
    e.preventDefault();
    const input = document.getElementById("input").value.toUpperCase();
    var letters = this.state.letters;
    const word = this.state.word.toUpperCase();
    const count = this.state.count;
    var obtained = this.state.obtained;

    // do not accept input unless it's exactly the length of the word
    if(input.length !== word.length) return;

    // put the input into the state array
    for(let i = 0; i < word.length; i++) {
      letters[count][i] = input[i];

      // add letters to obtained letter array if correct
      if(input[i] === word[i]){
        obtained[i] = word[i];
        this.setState({obtained});
      } 
    }

    // tell DOM to update letters and count in browser
    this.setState({letters});
    this.setState({count: count+1});

    // check if user has won and display result if true
    if(word === input){
      document.getElementById("result").innerHTML = "You found the word.";
      document.getElementById("input").disabled = true;
    }

    // check if user has lost and display result if true
    else if(count === letters.length - 1){
      document.getElementById("result").innerHTML = "You did not find the word.";
      document.getElementById("input").disabled = true;
    }

    // otherwise, reset the text box for new input
    document.getElementById("input").value = "";
    return;
  }

  render() { 
    return(
      <div className="content">
        <h1>PhraseMe</h1>
        <div className="guesses">
          <Guesses letters={this.state.letters} word={this.state.word.toUpperCase()} count={this.state.count} obtained={this.state.obtained} />
        </div>
        <Input onSubmit={this.handleSubmit} word={this.state.word}/>
        <h1 id="result"></h1>
      </div>
    );
  }
}
 
export default App;
