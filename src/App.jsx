import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Joke from "./pages/Joke";
import Quote from "./pages/Quote";
import Fact from "./pages/Fact";
import Navbar from "./components/Navbar/Navbar";
import Affirmation from "./pages/Affirmation";
import "./App.css"

export default function App() {
  return (
    <div className="custom-bgColor h-screen">
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  )
}