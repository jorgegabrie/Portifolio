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
          <Route path='/Portifolio/' element={<Home/>}></Route>
          <Route path='/Portifolio/projetos' element={<Projetos/>}></Route>
          <Route path='/Portifolio/contato' element={<Contato/>}></Route>

        </Routes>
    </Router>
)
}

export default App
    
  

          
                        

                
                
    
