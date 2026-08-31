import "./App.css";
import { useEffect, useState, useRef } from "react";
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";
import Even from "./components/Even";

function App() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");
    const didMountRef = useRef(false);
    useEffect(() => {
        if (!didMountRef.current) {
            didMountRef.current = true;
            return;
        } else console.log("component updated");
    });
    const handleSetCount = (value) => {
        setCount(count + value);
    };
    const handleChangeText = (e) => {
        setText(e.target.value);
    };
    useEffect(() => {
        console.log("count, text updated", count, text);
    }, [count, text]);

    return (
        <div className="App">
            <h1>Simple Counter</h1>
            <section>
                <input value={text} onChange={handleChangeText} />
            </section>
            <section>
                <Viewer count={count} />
                {count % 2 == 0 && <Even />}
            </section>
            <section>
                <Controller handleSetCount={handleSetCount} />
            </section>
        </div>
    );
}
export default App;
