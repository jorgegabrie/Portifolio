import ONG from '../../assets/IMG_ong.png'
import TOPfilmes from '../../assets/Top-filmes.png'
import POKEDEX from '../../assets/POKEDEX.png'
import './Projetos.scss'
import { FaReact } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";



function Projetos(){
    return(
        <div className='Container_projeto'>
            <h1>PROJETOS</h1>
            <div className='projeto'>
                <div className='projeto_img_link'>
                    <a className="figure" target="_blank" href='https://site-ong-jorge-gabriels-projects.vercel.app/'>
                        <img src={ONG} alt=""/>
                    </a>
                </div>
            
                <div className='projeto_texto'>
                    <h2>ONG - Me adota Po!</h2>
                    <p>Esse projeto foi feito para um trabalho da faculdade, onde teriamos que ajudar uma ong de animais que não possuia um site para divulgar os seus serviços. <br></br>
                        GITHUB:  <a target="_blank" href='https://github.com/jorgegabrie/Site-ong'>https://github.com/jorgegabrie/Site-ong</a> </p>
                    <h4>tecnologias:</h4>
                    <div className='tec'>
                    <span><FaReact/> React</span>
                    </div>
                    
                </div>
                
            </div>
            <div className='projeto'>
                <div className='projeto_img_link'>
                    <a className="figure"  href=''>
                        <img src={TOPfilmes} alt=""/>
                    </a>
                </div>
            
                <div className='projeto_texto'>
                    <h2>TOPFILMES</h2>
                    <p>Esse projeto foi feito para listar os melhores filmes e mostrar detalhes sobre eles. Essa aplicação faz o consumo de uma API que fornece a lista de filmes e todos os seus dados.<br></br>
                        GITHUB:  <a target="_blank" href='https://github.com/jorgegabrie/TopFilmes'>https://github.com/jorgegabrie/TopFilmes</a> </p>
                    <h4>tecnologias:</h4>
                    <div className='tec'>
                    <span><FaReact/> React</span>
                    <span><FaSass /> SASS</span>
                    </div>
                    
                </div>
                
            </div>
            <div className='projeto'>
                <div className='projeto_img_link'>
                    <a className="figure"  href=''>
                        <img src={POKEDEX} alt=""/>
                    </a>
                </div>
            
                <div className='projeto_texto'>
                    <h2>POKEDEX</h2>
                    <p>Esse projeto foi feito para listar os pokemons e monstrar detalhes sobre eles. Essa aplicação faz o consumo de uma API (POKEAPI) que fornece a lista de pokemons e todos os seus dados.<br></br>
                        GITHUB:  <a target="_blank" href='https://github.com/jorgegabrie/Pokedex'>https://github.com/jorgegabrie/Pokedex</a> </p>
                    <h4>tecnologias:</h4>
                    <div className='tec'>
                    <span><FaReact/> React</span>
                    <span><SiTailwindcss /> Tailwind</span>
                    </div>
                    
                </div>
                
            </div>
        </div>
            
    )
}

export default Projetos
           
                
            
            
            