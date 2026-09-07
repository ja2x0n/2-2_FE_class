import { useState, useCallback } from "react";

export default function TestComp() {
    const [count, setCount] = useState(0);

    const onIncrease = useCallback(() => {
        setCount((prev) => prev + 1);
    }, []);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={onIncrease}>+</button>
        </div>
    );
}
