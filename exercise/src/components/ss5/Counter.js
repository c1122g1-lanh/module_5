import {useState} from "react";

export function Counter() {
    const [countAdd1, setCountAdd1] = useState(0)
    const [countAdd2, setCountAdd2] = useState(0)
    const handleAdd1 = () => {
        const newValue = countAdd1 +1
        setCountAdd1(newValue)
    }

    const handleAdd2 = () => {
        const newValue = countAdd2 +2
        setCountAdd2(newValue)
    }

    return (
        <>
            <div>
                <h3>Count : {countAdd1}</h3>
                <button onClick={handleAdd1}>Add 1</button>
            </div>

            <div>
                <h3>Count : {countAdd2}</h3>
                <button onClick={handleAdd2}>Add 2</button>
            </div>
        </>
    )
}