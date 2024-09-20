import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../src/pages/Home.jsx'
import About from '../src/pages/About.jsx'
import Dashboard from '../src/pages/Dashboard.jsx'
import Projects from '../src/pages/Projects.jsx'
import Signin from '../src/pages/Signin.jsx'
import Signup from '../src/pages/Signup.jsx'
import Header from './components/Header.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/sign-in' element={<Signin/>} />
          <Route path='/sign-up' element={<Signup/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/projects' element={<Projects/>} />

      </Routes>
    </BrowserRouter>
  )
}