
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './assets/components/About/About'
import Home from './assets/components/Home/Home'
import './App.css'

function App() {

  return (
    <>

       <BrowserRouter>
         <Routes>
           <Route path='/' element={<Home/>} />
           <Route path='/about' element={<About />} />
         </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
