import React from 'react';

const UserOutputBase = (props) =>
    (
        <div>
            <p>{props.user.firstName}</p>
            <p>{props.user.lastName}</p>
        </div>
    );

const UserOutput = (props) => UserOutputBase(props);

export default UserOutput;