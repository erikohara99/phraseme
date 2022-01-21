import React from 'react';

class Guesses extends React.Component {
    state = {
        letters: this.props.letters
    }

    render() { 

        return <div>
            <h1>{this.props.obtained.join(" ")}</h1>
            <h1>Attempts: {this.props.count}</h1>

            {this.state.letters.map(guess => {
                return <div>{guess.map((letter, index) => {
                    letter = letter.toUpperCase();
                    if(letter == this.props.word[index]) return <div className="letter correct">{letter}</div>
                    if(this.props.word.includes(letter)) return <div className="letter position">{letter}</div>
                    return <div className="letter">{letter}</div>
                })}</div>
            })}
        </div>;
    }
}
 
export default Guesses;