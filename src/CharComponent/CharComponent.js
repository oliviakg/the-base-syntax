import React from 'react';

const CharComponentBase = (props) => {
    return <div onClick={props.click}>{props.char}</div>
}

const CharComponent = (props) => CharComponentBase(props)

export default CharComponent;