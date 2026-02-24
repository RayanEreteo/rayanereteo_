import { useState } from 'react'

import './App.css'
import Presentation from './components/Section/Presentation';
import Skills from './components/Section/Skills';
import Projects from './components/Section/Projects';
import Contact from './components/Section/Contact';

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
            <a href="#projects" className='nes-btn is-primary'>Mes Quêtes</a>
            <button className='nes-btn is-success' onClick={downloadCV} onMouseEnter={() => setDownloadCVText("Télécharger CV")} onMouseLeave={() => setDownloadCVText("Fiche Personnage")}>{downloadCVText}</button>
          </div>
        </div>
      </nav>
      <Presentation />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}

export default App