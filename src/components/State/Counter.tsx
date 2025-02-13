import { useState } from "react"

export function Counter() {
    const [count, setCount] = useState(0)

    function decrement() {
        setCount(count - 1);
    }

    function increment() {
        setCount(count + 1);
    }

    return (
        <div>
            <button className="btn btn-secondary" onClick={decrement}>-</button>
            <span className="px-10">
                {count}
            </span>
            <button className="btn btn-secondary" onClick={increment}>+</button>
        </div>
    )
}