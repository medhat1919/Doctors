import { Routes, Route } from 'react-router-dom'
 import Home from './pages/Home'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Login from './pages/Login'
import Contact from './pages/Contact'
import About from './pages/About'
import Doctors from './pages/Doctors'
import Details from './pages/Details'
   
function App() {
  return (
    <div >
      <Navbar />
      <Routes>
<Route path='/' element={<Home />} />
<Route path='/login' element={<Login />} />
<Route path='/contact' element={<Contact />} />
<Route path='/about' element={<About />} />
<Route path='/doctors' element={<Doctors />} />
<Route path='/doctors/:id' element={<Details />} />
 

    </Routes>
    <Footer />
    </div>
  )
}

export default App
