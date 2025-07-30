
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import AddContent from './components/AddContent'
import About from './components/About'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}>
      <Route path='/addContent' element={<AddContent />} />
      <Route path='/about' element={<About />} />
      </Route>
    </Routes>
    </>
  )
}

export default App
