import React from 'react';

const Input = (props) => {
    return ( 
        <form onSubmit={props.onSubmit}>
            <input id="input" placeholder="Enter guess..."></input>
        </form>
     );
}
 
export default Input;