import logo from "./logo.svg";
import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";
import Logout from "./components/Logout";
import User from "./components/User";
import Login from "./components/Login";

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="App">
      {!isAuthenticated ? (
        <div>
          <p>Customer Auth0 Login App</p>
          <Login />
        </div>
      ) : (
        <div>
          <Logout />
          <User />
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
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
        </div>
      )}
    </div>
  );
}

export default App;