import React from 'react';

const Home = () => {
    const simpleFunction = () => {
        console.log('This is a simple function');
    };

    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <button onClick={simpleFunction}>Click Me</button>
        </div>
    );
};

export default Home;