import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import './Contato.scss'


function Contato(){
    return(
        <div className="contatos">
            <h1>CONTATO</h1>
            <div className="container_geral">
                  
                    <div className="text-icones">
                        <h2>Entre em contato</h2>
                        <p>Se você tem perguntas, sugestões ou simplesmente quer trocar ideias, estou aqui para ouvir você. Utilize o formulário ao lado para entrar em contato, e farei o possível para responder o mais rápido possível.</p>  
                        <div className="icons">
                            <a target="_blank" href="https://www.linkedin.com/in/jorge-gabriel-48537a1b2"><FaLinkedin /></a>
                            <a target="_blank" href="https://github.com/jorgegabrie"><FaGithub /></a>
                            <a target="_blank" href="mailto:jgnf.25@gmail.com"><MdEmail /></a>
                        </div>
                        
                    </div> 
                <div className="formulario">
                    <form action="https://formsubmit.co/jgnf.25@gmail.com" method="POST">
                        <h2>Escreva uma mensagem</h2>
                        <input type="text" name="name" placeholder="Digite o seu nome..." />
                        <input type="email" name="email" placeholder="Digite o seu email" />
                        <textarea name="message" cols="30" rows="10" placeholder="digite sua mensagem..."></textarea>
                        <button type="submit">ENTRE EM CONTATO</button>
                    </form>
                    
                </div>
            </div>
            
        </div>
    )
}

export default Contato
                    
                        
                
                
                    
                    


