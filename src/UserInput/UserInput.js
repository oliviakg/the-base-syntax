import React from 'react';

const UserInputBase = (props) => <input type="text" onChange={props.changed} value={props.user.firstName}></input>;

const UserInput = (props) => UserInputBase(props);

export default UserInput;