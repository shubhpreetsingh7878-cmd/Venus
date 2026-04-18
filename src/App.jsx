import Home from "./Home"
import Header from "./Header"
import About from "./About"
import Blog from "./Blog"
import Servicepage from "./Servicepage"
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/services" element={<Servicepage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
