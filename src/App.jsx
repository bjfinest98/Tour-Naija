
import './App.css'
import Navbarcomp from './component/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Aboutus from './component/page/Aboutus'
import Contact from './component/page/Contact'
import { Route, Routes } from 'react-router-dom'
import Home from './component/page/Home'
import Services from './component/page/Services'
import Footercomp from './component/page/footer'

function App() {

  return (
      <div className='body'>
      <Navbarcomp/>
      <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Aboutus' element={<Aboutus/>}/>
        <Route path='/Our Service' element={<Services/>}/>
        <Route path='/Contact Us' element={<Contact/>}/>
        
      </Routes>
      <Footercomp/>
      </div>
      
  )
}

export default App;
