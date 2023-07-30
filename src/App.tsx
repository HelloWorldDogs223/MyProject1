import Home from "./pages/Home";
import Header from "./components/Header";
import Login from "./pages/Login";
import List from "./pages/List";
import Bookmark from "./pages/Bookmark";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/list" element={<List />}></Route>
        <Route path="/Bookmark" element={<Bookmark />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
