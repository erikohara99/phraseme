import React, { Component } from 'react';

class Guesses extends React.Component {
    state = {
        letters: [[0,0,3,0,0],["c","a",0,"b",0],["a","c","b","f","b"],[0,0,0,0,0],[0,8,0,0,0],["a","c","b","d","b"]],
        word: this.props.word
    }

    render() { 
        return <div>
            <h1>{this.state.word}</h1>

            {this.state.letters.map(guess => {
                return <div>{guess.map((letter, index) => {
                    if(letter == this.state.word[index]) return <div class="letter correct">{letter}</div>
                    if(this.state.word.includes(letter)) return <div class="letter position">{letter}</div>
                    //if(letter === 0) return <div class="letter">{"a"}</div>;
                    return <div class="letter">{letter}</div>
                })}</div>
            })}
        </div>;
    }
}
 
export default Guesses;