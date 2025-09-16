import { useState } from "react"

export default function Counter(){
    const [Count, setCount] = useState(0);

    const handleAdd = () =>{
        const newCount = Count+1;
        setCount(newCount)
    }

    const counterStyle = {
        border: '2px solid yellow'
    }
    return(
        <div style={counterStyle}>
            <h3>Count: {Count}</h3>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}