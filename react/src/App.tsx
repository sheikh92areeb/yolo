import { Route, Routes } from "react-router"
import Layout from "./components/Layout"
import Home from './pages/Home'
import Eat from "./pages/Eat"
import Play from "./pages/Play"
import Relax from "./pages/Relax"
import About from "./pages/About"
import MoreInfo from "./pages/MoreInfo"


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route  index element={ <Home /> } />
          <Route path="eat" element={ <Eat /> } />          
          <Route path="play" element={ <Play /> } />          
          <Route path="relax" element={ <Relax /> } />          
          <Route path="about" element={ <About /> } />
          <Route path="more-info" element={ <MoreInfo /> } />          
        </Route>
      </Routes>
    </>
  )
}

export default App
