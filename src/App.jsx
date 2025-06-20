import { Route, Routes, useLocation } from "react-router-dom"
import LanguageToggle from "./components/LanguageToggle"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Service from "./pages/service/Service"
import Contact from "./pages/contact/Contact"
import Price from "./pages/price/Price"
import { useEffect, useState } from "react"
import Loading from "./components/Loading"
import Aos from "aos"

function App() {

    useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
      offset: 10,
    })
  }, [])

  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if(isLoading){
    return <Loading />
  }



  return (
    <>
      {/* <Navbar /> */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/price" element={<Price />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  )
}

export default App
