import './App.css';
import Weather from "./Weather.js";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather className = "weather" city="London"/>
        <a href='https://github.com/O-l-i-a/weather-react-application'>
        Project on GitHub
        </a>
      </div>
    </div>
  );
}

export default App;
