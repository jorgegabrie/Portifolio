import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import Home from "./components/Home/Home"
import Projetos from './components/Projetos/Projetos'
import Contato from './components/Contato/Contato'
import Navbar from './layout/Navbar'



function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/projetos' element={<Projetos/>}></Route>
          <Route path='/contato' element={<Contato/>}></Route>

        </Routes>
    </Router>
)
}

export default App
    
  

          
                        

                
                
    
