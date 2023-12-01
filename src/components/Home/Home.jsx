import './Home.scss'
import fotoeu from '../../assets/fotoeu.png'
import { useState } from 'react'
import SobreminCard from '../Sobremim/SobreminCard'
import {  FaWindowClose } from "react-icons/fa";

function Home() {

    const [sobremim, setSobremin] = useState(true)

    function toggleSobremin(){
        setSobremin(!sobremim)
        
    }

    return(
        
            <main className="homeee">
                <div className={!sobremim ? 'filtro' : 'container'}>
                    <div className="text">
                        <h1>JORGE GABRIEL</h1>
                        <h2 className='typing-animation'>Desenvolvedor Web 👨‍💻</h2>
                        <p>Especializado em criação de sites responsivos e interativos, com foco na usabilidade e na experiência do usuário. Excelente capacidade de solucionar problemas e adaptar-se a novas tecnologias rapidamente.</p>
                        <button onClick={toggleSobremin}>SOBRE MIM</button>
                    </div>
                    <div className='imagemeu'>
                        <img src={fotoeu} alt="" />
                    </div>
                    
                </div>
                {!sobremim && ( 
                    <div  className='container-geral'>  
                        <FaWindowClose className='icone-x' onClick={toggleSobremin}/>
                        <div className='containereu'>
                            
                            <SobreminCard/>   

                        </div>

                    </div>
                        
                        )}
            </main>
           
            
            
        
      
       
      
    )
}

export default Home
                        
                
                
            
        