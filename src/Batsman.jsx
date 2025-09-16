import { useState } from "react"

export default function Batsman(){
    const [runs, setRuns] = useState(0);

    const handleSingle = () =>{
        const newRuns = runs+1;
        setRuns(newRuns)
    }
    const handleSix = () =>{
        const newRuns = runs+6;
        setRuns(newRuns)
    }
    const handleFour = () =>{
        const newRuns = runs+4;
        setRuns(newRuns)
    }
    return(
        <div>
            <h3>Player: Bangla</h3>
            {
                runs >50 && <p>Your score : 50+ </p>
            }
            <h1>Score: {runs}</h1>
            <button onClick={handleSingle}>singles</button>
            <button onClick={handleSix}>Four</button>
            <button onClick={handleFour}>Six</button>
        </div>
    )
}