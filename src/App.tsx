import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./pages/Home";

import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
