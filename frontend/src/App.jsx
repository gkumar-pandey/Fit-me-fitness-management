import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Dashboard, Exercise, Goal, Food } from "./pages";
import NavBar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Router>
        <div className="hidden h-screen font-bold xl:flex App">
          <NavBar />
          <div className="w-[85%] bg-[#dcf8f5] text-black h-screen overflow-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/exercise" element={<Exercise />} />
              <Route path="/target" element={<Goal />} />
              <Route path="/food" element={<Food />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
