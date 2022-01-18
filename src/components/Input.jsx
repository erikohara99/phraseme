import React from 'react';

const Input = (props) => {
    return ( 
        <form onSubmit={props.onSubmit}>
            <input id="input" placeholder="Enter guess..." maxLength={props.word.length}></input>
        </form>
     );
}
 
export default Input;