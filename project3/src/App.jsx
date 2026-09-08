import { Routes, Route } from "react-router";
import "./App.css";
import Home from "./pages/Home.jsx";
import New from "./pages/New.jsx";
import Diary from "./pages/Diary.jsx";
import Edit from "./pages/Edit.jsx";
import { Link } from "react-router";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/new" element={<New />} />
                <Route path="/diary/:id" element={<Diary />} />
                <Route path="/edit" element={<Edit />} />
            </Routes>
            <div>
                <Link to="/">Home</Link>
                <Link to="/new">New</Link>
                <Link to="/diary/1">Diary</Link>
                <Link to="/edit">Edit</Link>
            </div>
        </div>
    );
}
export default App;
