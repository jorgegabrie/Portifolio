import { Link } from "react-router-dom"
import logo from '../assets/logo.png'
import './Navbar.scss'
import { RiMenu3Fill } from 'react-icons/ri'
import { useState } from "react"



function Navbar(){

    const [abrirmenu, setAbrirmenu] = useState(false)

    const toggleModule = () => {
        setAbrirmenu(!abrirmenu)
    }

    return(
        <div>
            <nav className='Navegacao'>
                    <Link to='/Portifolio/'>
                        <img className="imagem_log" src={logo} alt="" />
                    </Link>
                <ul className="linkes">
                    <li>
                        <Link to="/Portifolio/" >HOME</Link>
                    </li>
                    <li>
                        <Link to="/Portifolio/projetos" >PROJETOS</Link>
                    </li>
                    <li>
                        <Link to="/Portifolio/contato" >CONTATO</Link>
                    </li>
                </ul>
                <div className="menu-hamburguer">
                    <RiMenu3Fill onClick={toggleModule}/>
                    <ul className={abrirmenu ? 'linkeshamburguer' : 'notlinks'}>
                    <li>
                        <Link to="/Portifolio/" onClick={toggleModule}>HOME</Link>
                    </li>
                    <li>
                        <Link to="/Portifolio/projetos" onClick={toggleModule}>PROJETOS</Link>
                    </li>
                    <li>
                        <Link to="/Portifolio/contato" onClick={toggleModule}>CONTATO</Link>
                    </li>
                </ul>
                </div>
            </nav>
        </div>
              
        
    )
}

export default Navbar