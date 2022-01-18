import React from 'react';

class Guesses extends React.Component {
    state = {
        letters: this.props.letters,
        word: this.props.word
    }

    render() { 
        return <div>
            <h1>{this.state.word}</h1>

            {this.state.letters.map(guess => {
                return <div>{guess.map((letter, index) => {
                    if(letter == this.state.word[index]) return <div class="letter correct">{letter}</div>
                    if(this.state.word.includes(letter)) return <div class="letter position">{letter}</div>
                    return <div class="letter">{letter}</div>
                })}</div>
            })}
        </div>;
    }
}
 
export default Guesses;