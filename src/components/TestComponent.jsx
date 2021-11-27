import {useEffect, useState} from 'react';

export const TestComponent = (props) => {

    const [count, setCount] = useState(props.counter);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );

}