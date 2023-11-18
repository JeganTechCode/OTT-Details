import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,

} from "react-router-dom";
import './assets/css/style.css';
import Home from './pages/Home';
import Detail from './pages/Detail';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/movie-details/:id" element={<Detail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
