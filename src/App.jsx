import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Lodging from "./pages/Lodging/Lodging";
import NotFound from "./pages/NotFound/NotFound";
import Layout from "./pages/Layout/Layout";
import { useEffect, useState } from "react";
import data from '../datas/appartements.json';

function App() {
  const [apparts, setAppart] = useState([])

  useEffect(() => {
   setAppart(data)
  }, [])
 
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home apparts={apparts}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/lodging" element={<Lodging />} />
        <Route path="/error" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
