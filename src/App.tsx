import { useState } from 'react'
import './App.css'

function App() {
  const [downloadCVText, setDownloadCVText] = useState<String>("Fiche Personnage")

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
            <a href="" className='nes-btn is-primary'>Mes Quêtes</a>
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
          {/* Project Component here... */}
        </div>
      </div>
    </main>
  )
}

export default App