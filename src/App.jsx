import Navbar from "./Components/Navbar/Navbar.jsx";
import {Routes, Route} from "react-router-dom";
import Movies from "./Components/pages/Movies.jsx";
import Home from "./Components/pages/Home.jsx";
import Computers from "./Components/pages/Computers.jsx";
import Hoc from "./Components/pages/Hoc.jsx";
import Render from "./Components/pages/Render.jsx";
import Calendar from "./Components/pages/Calendar.jsx";
import Counter from "./Components/pages/Counter.jsx";

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/computers" element={<Computers/>}/>
        <Route path="/hoc" element={<Hoc/>}/>
        <Route path="/render" element={<Render/>}/>
        <Route path="/calendar" element={<Calendar/>}/>
        <Route path="/counter" element={<Counter/>}/>
      </Routes>
    </>
  )
}

export default App
