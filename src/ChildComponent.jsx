import React from 'react';

function ChildComponent(props) {
    return (
        <div>
            <h2>Child Component</h2>
            <p>{props.text}</p>
        </div>
    );
}

export default ChildComponent;
// Props are a mechanism for passing data from one component to another
//  Props allow you to customize and configure components, making them reusable and flexible