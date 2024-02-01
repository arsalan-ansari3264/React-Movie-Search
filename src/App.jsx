import "./App.css"
import Home from "./Components/Home"
import MovieDetail from "./Components/MovieDetail"
import Error from "./Components/Error"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/movie/:id" element={<MovieDetail />}/>
            <Route path="*" element={<Error />}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App