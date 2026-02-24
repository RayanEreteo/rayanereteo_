import { useState } from 'react'
import Project from './components/Project';
import { useForm, ValidationError } from '@formspree/react';

import './App.css'
import willitdryT from "./assets/willitdry.png"
import livePictureT from "./assets/livepictures.png"

function App() {
  const [state, handleSubmit] = useForm("xojnyavz");
  const [downloadCVText, setDownloadCVText] = useState<String>("Fiche Personnage")
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  function downloadCV() {
    const elem = document.createElement('a');
    elem.href = '/CV_Développeur.pdf';
    elem.target = '_blank';
    document.body.appendChild(elem);
    elem.click();
    document.body.removeChild(elem);
  }

  return (
    <main>
      <nav>
        <div className="nes-container with-title is-centered" id='navbar'>
          <h1 className='nes-text'>Rayan Ereteo <span><i className="nes-octocat animate"></i></span></h1>
          <div className="btns-container">
            <a href="#projects" className='nes-btn is-primary'>Mes Quêtes</a>
            <button className='nes-btn is-success' onClick={downloadCV} onMouseEnter={() => setDownloadCVText("Télécharger CV")} onMouseLeave={() => setDownloadCVText("Fiche Personnage")}>{downloadCVText}</button>
          </div>
        </div>
      </nav>
      <div className='mt' id='presentation'>
        <h2 className='nes-text'>Qui suis-je ?</h2>
        <br />
        <p id='presentation-text'>Mon nom est <span className='nes-text is-primary'>Rayan</span>, Je suis un développeur passionné spécialisé en développement web. J'aime créer des expériences web intuitives et performantes.</p>
        <div className='nes-container' id="socials">
          <a href="https://github.com/RayanEreteo" target='_blank'><i className="nes-icon github is-medium"></i></a>
          <a href="https://www.linkedin.com/in/rayan-ereteo-65099437a/" target='_blank'><i className="nes-icon linkedin is-medium"></i></a>
        </div>
      </div>
      <div className="mt" id='skills'>
        <h2 className='nes-text'>Compétences</h2>
        <div className="skills-grid">
          <div className="nes-container with-title">
            <p className="title">Front-end</p>
            <ul className='nes-list is-circle' id='frontend-list'>
              <li>Javascript / Typescript</li>
              <li>NextJS</li>
              <li>React</li>
              <li>C</li>
              <li>Tailwind</li>
            </ul>
          </div>

          <div className="nes-container with-title">
            <p className="title">Back-end & Outils</p>
            <ul className="nes-list is-disc">
              <li>Node.js / Express</li>
              <li>PHP</li>
              <li>Python / Flask</li>
              <li>MySQL / MongoDB</li>
              <li>Git</li>
              <li>Windows</li>
              <li>Linux</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='mt' id='projects'>
        <h2 className='nes-text'>Quêtes principales</h2>
        <div className="nes-container">
          <Project title='Will It Dry ?' description="”Will It Dry ?” est une application utilisant l'API d'openweathermap et utilise les données reçus pour prédire si la météo actuelle est dans une bonne condition pour tendre le linge." thumbnail={willitdryT} projectURL='https://github.com/RayanEreteo/WillItDry'></Project>
          <Project title='Live Pictures' description="”Live Pictures” est une application permettant d'envoyer en temps réel des images a toutes personnes présentes dans un canal." thumbnail={livePictureT} projectURL='https://github.com/RayanEreteo/LivePictures'></Project>
        </div>
      </div>
      <div className="mt" id="contact">
        <h2 className="nes-text">Envoyer un Hibou</h2>

        <div className="contact-grid">
          <div className="nes-container with-title is-dark">
            <p className="title">Coordonnées</p>
            <div className="contact-item">
              <i className="nes-icon gmail is-small"></i>
              <span>rayan.ereteo@email.com</span>
            </div>
            <div className="contact-item mt-small">
              <i className="nes-icon whatsapp is-small"></i>
              <span>06 00 00 00 00</span>
            </div>
          </div>

          <div className="nes-container with-title">
            <p className="title">Formulaire de Contact</p>
            <form onSubmit={handleSubmit}>
              <div className="nes-field mt-small">
                <label htmlFor="email_field">Email</label>
                <input type="email" name="email" id="email_field" className="nes-input" placeholder="ton@email.com" />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>

              <div className="nes-field mt-small">
                <label htmlFor="textarea_field">Message</label>
                <textarea id="textarea_field" name='message' className="nes-textarea" placeholder="Quelle est votre requête ?"></textarea>
              </div>

              <div className="form-actions mt-small">
                <button type="submit" className="nes-btn is-primary">Envoyer</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App