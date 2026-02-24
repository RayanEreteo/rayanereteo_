import Project from "../Project"

import willitdryT from "../../assets/willitdry.png"
import livePictureT from "../../assets/livepictures.png"

function Projects() {
    return (
        <div className='mt' id='projects'>
            <h2 className='nes-text'>Quêtes principales</h2>
            <div className="nes-container">
                <Project title='Will It Dry ?' description="”Will It Dry ?” est une application utilisant l'API d'openweathermap et utilise les données reçus pour prédire si la météo actuelle est dans une bonne condition pour tendre le linge." thumbnail={willitdryT} projectURL='https://github.com/RayanEreteo/WillItDry'></Project>
                <Project title='Live Pictures' description="”Live Pictures” est une application permettant d'envoyer en temps réel des images a toutes personnes présentes dans un canal." thumbnail={livePictureT} projectURL='https://github.com/RayanEreteo/LivePictures'></Project>
            </div>
        </div>
    )
}

export default Projects