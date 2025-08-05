import './App.css'
import Header from './components/Header/Header.jsx'
import Home from './pages/Home/Home.jsx'
import Characters from './pages/Characters/Characters.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CharacterDetail from './pages/characterDetail/characterDetail.jsx'
import LandingPage from './pages/LandingPage/LandingPage.jsx'
import Planets from './pages/Planets/Planets.jsx'



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/characters" element={<Characters/>}/>
          <Route path="/characters/:id" element={<CharacterDetail/>}/>
          <Route path="/planets" element ={<Planets/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
