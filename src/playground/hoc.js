// HOC Higher order component = a component that renders another component.
// advantages to using HOC
// reuse code
// render hijacking
// prop manipulation
// abstract state
// components naming convention start with Uppercase

console.log("hoc")

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
    <h1>Info</h1>
    <p>this is info: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>this is private info</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props}/>
            ):(
                <p> please login </p>
            )}
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info = "these details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info = "these details" />, document.getElementById('app'));