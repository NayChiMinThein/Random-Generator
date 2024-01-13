import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Joke from "./pages/Joke";
import Quote from "./pages/Quote";
import Fact from "./pages/Fact";
import "./App.css"

export default function App() {
  return (
    <div className="custom-bgColor h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>}/>
            <Route path="getJoke" element={<Joke/>}/>
            <Route path="getQuote" element={<Quote/>}/>
            <Route path="getFact" element={<Fact/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}