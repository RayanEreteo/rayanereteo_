function Skills() {
    return (
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

    )
}

export default Skills