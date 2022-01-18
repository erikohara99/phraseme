import React from 'react';

class Guesses extends React.Component {
    state = {
        letters: this.props.letters,
        word: this.props.word
    }

    render() { 
        return <div>
            <h1>{this.state.word}</h1>
            <h1>{this.props.count}</h1>

            {this.state.letters.map(guess => {
                return <div>{guess.map((letter, index) => {
                    if(letter.toUpperCase() == this.state.word[index].toUpperCase()) return <div className="letter correct">{letter}</div>
                    if(this.state.word.toUpperCase().includes(letter.toUpperCase())) return <div className="letter position">{letter}</div>
                    return <div className="letter">{letter}</div>
                })}</div>
            })}
        </div>;
    }
}
 
export default Guesses;