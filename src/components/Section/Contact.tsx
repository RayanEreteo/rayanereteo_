import { useForm, ValidationError } from '@formspree/react';

function Contact() {
    const [state, handleSubmit] = useForm("xojnyavz");

    return (
        <div className="mt" id="contact">
            <h2 className="nes-text">Envoyer un Hibou</h2>

            <div className="contact-grid">
                <div className="nes-container with-title is-dark">
                    <p className="title">Coordonnées</p>
                    <div className="contact-item">
                        <i className="nes-icon gmail is-small"></i>
                        <span>ereteo.rayan1@gmail.com</span>
                    </div>
                    <div className="contact-item mt-small">
                        <i className="nes-icon whatsapp is-small"></i>
                        <span>07 44 54 35 56</span>
                    </div>
                </div>

                <div className="nes-container with-title">
                    <p className="title">Formulaire de Contact</p>
                    { state.succeeded == false ? <form onSubmit={handleSubmit}>
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
                    </form> : <p>Merci !</p>}
                </div>
            </div>
        </div>
    )
}

export default Contact