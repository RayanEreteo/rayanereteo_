function Presentation() {
    return (
        <div className='mt' id='presentation'>
            <h2 className='nes-text'>Qui suis-je ?</h2>
            <br />
            <p id='presentation-text'>Mon nom est <span className='nes-text is-primary'>Rayan</span>, Je suis un développeur passionné spécialisé en développement web. J'aime créer des expériences web intuitives et performantes.</p>
            <div className='nes-container' id="socials">
                <a href="https://github.com/RayanEreteo" target='_blank'><i className="nes-icon github is-medium"></i></a>
                <a href="https://www.linkedin.com/in/rayan-ereteo-65099437a/" target='_blank'><i className="nes-icon linkedin is-medium"></i></a>
            </div>
        </div>
    )
}

export default Presentation