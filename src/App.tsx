import { useState } from 'react'
import './App.css'

function App() {
  const [downloadCVText, setDownloadCVText] = useState<String>("Fiche Personnage")

  function downloadCV(){
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
          <p className='title'>Menu Principal</p>
          <h1 className='nes-text'>Rayan Ereteo</h1>
          <div className="btns-container">
            <a href="" className='nes-btn'>Mes Quêtes</a>
            <button className='nes-btn' onClick={downloadCV} onMouseEnter={() => setDownloadCVText("Télécharger CV")} onMouseLeave={() => setDownloadCVText("Fiche Personnage")}>{downloadCVText}</button>
          </div>
        </div>
      </nav>
    </main>
  )
}

export default App
