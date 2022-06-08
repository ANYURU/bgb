import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Application from './pages/Application';
import Login from './pages/Login';
import Layout from './components/shared/Layout';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/apply" element={<Application />} />
          <Route path="/login" element={<Login />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
