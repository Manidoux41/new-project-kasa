import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Lodging from "./pages/Lodging/Lodging";
import NotFound from "./pages/NotFound/NotFound";
import Layout from "./pages/Layout/Layout";
import { useEffect, useState } from "react";

function App() {
  const [apparts, setApparts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('./datas/appartements.json')
        const data = await(response.json())
        setApparts(data)
      } catch (error) {
        console.log("Une erreur s'est produite");
      }
    }
    setTimeout(fetchData, 3000);
    return () => {};
  }, [])
 
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home apparts={apparts}/>} />
        <Route path="/home" element={<Home apparts={apparts}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/lodging/:logementId" element={<Lodging apparts={apparts} />} />
        <Route path="/error" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
