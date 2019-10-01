import React from 'react';

const ValidationComponentBase = (props) => {
    return <div>
        <p>{props.validationMsg}</p>
    </div>
}


const ValidationComponent = (props) => {
    let validationMsg = '';
    if (props.inputLength < 5) {
        validationMsg = 'Text too short';
    } else {
        validationMsg = 'Text long enough';
    }

    const updatedProps = {
        ...props,
        validationMsg
    }
    return ValidationComponentBase(updatedProps);
}


export default ValidationComponent;