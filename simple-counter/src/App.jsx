import React, { useState, useEffect } from 'react';

function App() {
    const [counterState, setCounterState] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCounterState((counterState) => counterState + 1);
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, [counterState]);

    return (
        <div>
            <h2>Counter: {counterState}</h2>
        </div>
    );
}

export default App;

