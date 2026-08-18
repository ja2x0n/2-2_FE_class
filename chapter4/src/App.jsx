import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

const Child = () => {
    return <p>Child Component</p>;
};

function App() {
    const title = "Hello";
    return (
        <>
            <div className="App">
                <Header title={title} />
                <Body>
                    <Child />
                </Body>
                <Footer />
            </div>
        </>
    );
}

export default App;
