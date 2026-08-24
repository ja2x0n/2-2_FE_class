import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";


function App() {
    const title = "Hello";
    return (
        <>
            <div className="App">
                <Header title={title} />
                <Body />
                <Footer />
            </div>
        </>
    );
}

export default App;
