import './SobremimCard.scss'
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";





function SobreminCard(){
    return(
        <div className="card_sobre">
            <h1>JORGE GABRIEL</h1>
            <p>Me chamo Jorge Gabriel, tenho 21 anos e atualmente estou estudando <span>Análise e Desenvolvimento de Sistemas</span>. No meu tempo livre gosto de fazer projetos pessoais para aprimorar minhas habilidades, aprender novas tecnologias e jogar video game.</p>
            <p> Atualmente estou estudanto e criando projetos com as tecnologias: </p>
            <div className='icones_tec'>
                <div className='ico'>
                    <FaReact />
                    <span>REACT</span>
                </div>
                <div className='ico'>
                    <IoLogoJavascript />
                    <span>JAVASCRIPT</span>
                </div>
                <div className='ico'>
                    <FaHtml5 />
                    <span>HTML</span>
                </div>

                <div className='ico'>
                    <FaCss3Alt />
                    <span>CSS</span>
                </div>


            </div>
            



        </div>
    )
}

export default SobreminCard