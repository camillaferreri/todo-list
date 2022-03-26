import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { TodosProvider } from "./context/todos";

import { Footer } from "./components/Footer";
import { Menu } from "./components/Menu";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <TodosProvider>
          <Menu />
          <Footer />
          
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </TodosProvider>
      </Router>
    </div>
  );
}

export default App;
