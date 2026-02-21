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
        <p>Mon nom est <span className='nes-text is-primary'>Rayan</span>, Je suis un développeur passionné</p>
        <div className='nes-container' id="socials">
            <a href="https://github.com/RayanEreteo" target='_blank'><i className="nes-icon github is-medium"></i></a>
            <a href="https://github.com/RayanEreteo" target='_blank'><i className="nes-icon linkedin is-medium"></i></a>
        </div>
      </div>
    </main>
  )
}

export default App
