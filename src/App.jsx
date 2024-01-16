import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Joke from "./pages/Joke";
import Quote from "./pages/Quote";
import Fact from "./pages/Fact";
import Navbar from "./components/Navbar/Navbar";
import Affirmation from "./pages/Affirmation";
import Preloader from "./components/Preloader";
import { useEffect, useState } from "react";
import "./App.css"

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1500);
  }, [])

  return (
    <div className="custom-bgColor min-h-screen">
      {loading ? <Preloader/> :
        <>
          <Navbar/> 
          <Routes>
            <Route path="/">
              <Route index element={<Home/>}/>
              <Route path="getJoke" element={<Joke/>}/>
              <Route path="getQuote" element={<Quote/>}/>
              <Route path="getFact" element={<Fact/>}/>
              <Route path="getAffirmation" element={<Affirmation/>}/>
            </Route>
          </Routes>
        </>
      }
    </div>
  )
}