import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

/*
class App extends Component {
  [message] = useState("Nothing yet");
  componentDidMount() {
    this.callAPI()
      .then((res) => this.setState({ message: res }))
      .catch((err) => console.log(err));
  }

  callAPI = async () => {
    const response = await fetch("http://localhost:5000/api");
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message);
    }
    // note the body will come back looking like this -- { express: "simple response" }
    return body.express; // this is returned in the "response" to a .then() promise chain
  };


*/

function App() {
  const [message, setMessage] = useState("Nothing Yet");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/api")
      .then((response) => response.json())
      .then((data) => setMessage(data.express))
      .then(() => setLoading(false))
      .catch(setError);
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <pre>{JSON.stringify(error)}</pre>;
  if (!message) return null;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <p>A message from express: {message} </p>
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
  );
}

export default App;
