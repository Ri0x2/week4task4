import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {

    const textToPass = "Hello from Parent Component!";

    return (
        <div>
            <h1>Parent Component</h1>
            
            <ChildComponent text={textToPass} />
        </div>
    );
}

export default ParentComponent;

// Props are a mechanism for passing data from one component to another
//  Props allow you to customize and configure components, making them reusable and flexible