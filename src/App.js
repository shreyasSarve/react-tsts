import Navbar from "./Navbar";
import "./App.css";
import TextForm from "./Textarea";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar title="TextUtils" />
        <Routes>
          {/* <Route path="/"/> */}
          <Route path="/about" element={<TextForm />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
