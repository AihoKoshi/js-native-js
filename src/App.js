import logo from './logo.svg';
import './App.css';
import {Main2} from "./lesson-2/main2";
// import {Main} from "./lesson-1/main";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            <Main2/>
            {/*<Main/>*/}
        </div>
    );
}

export default App;
