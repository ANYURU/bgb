import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Application from '../pages/Application';
import Login from '../pages/Login';
import Layout from '../components/shared/Layout';
import Home from '../pages/Home';
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "./PrivateRoute";
import SignUp from "../pages/SignUp";
import ApplicationAdmin from "../pages/ApplicationAdmin"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<PrivateRoute />} >
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/dashboard/:applicationId" element={<ApplicationAdmin />}/>
            <Route path="/signup" element={<SignUp />} />
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="/apply" element={<Application />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
