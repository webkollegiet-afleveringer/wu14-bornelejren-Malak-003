import { useState } from "react"
import { Link } from "react-router"

export default function Sponsor() {

    const [stoettetype, setStoettetype] = useState("")
    const [firmanavn, setFirmanavn] = useState("")
    const [mail, setMail] = useState("")
    const [telefon, setTelefon] = useState("")
    const [adresse, setAdresse] = useState("")

    const [errors, setErrors] = useState({})
    const [showSuccess, setShowSuccess] = useState(false)


    function validate() {
        const newErrors = {}

        if (!stoettetype) {
            newErrors.stoettetype = "Vælg venligst en støttetype"
        }

        if (!firmanavn) {
            newErrors.firmanavn = "Firmanavn er Required "
        } else if (firmanavn.length < 2) {
            newErrors.firmanavn = "Firmanavn skal være mindst 2 tegn"
        }

        if (!mail) {
            newErrors.mail = "E-mail er Required "
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) {
            newErrors.mail = "Indtast en gyldig e-mailadresse"
        }

        if (!telefon) {
            newErrors.telefon = "Telefonnummer er Required "
        } else if (!/^\d{8}$/.test(telefon.replace(/\s/g, ""))) {
            newErrors.telefon = "Telefonnummer skal være 8 cifre"
        }

        if (!adresse) {
            newErrors.adresse = "Adresse er Required"
        }


        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }


    function handleSubmit() {
        if (validate()) {
            setShowSuccess(true)
        }
    }


    return (
        <div className="sponsor">

            <section className="sponsor__hero">
                <h1>Tilmeld som sponsor</h1>
            </section>

            <section className="sponsor__content">

                <p className="sponsor__intro">
                    Da det er meget individuelt, hvor meget en virksomhed kan og ønsker at støtte med,
                    har vi opdelt støttemulighederne i 3 kategorier:
                </p>

                <div className="tiers__grid">

                    <div className="tier-card tier-card--featured">
                        <span className="tier-card__badge">Mest valgt</span>
                        <h3>Børnesponsorat</h3>
                        <p className="tier-card__price">4.000 kr.</p>
                        <p>
                            Hvis din virksomhed vælger at blive børnesponsor, dækker I omkostningerne for et
                            navngivet barns ophold og transport til og fra Langeland. Prisen pr. barn varierer
                            fra lejr til lejr, men vi har fastsat en gennemsnitspris på kr. 4.000,- pr. barn for
                            et ophold. Denne pris inkluderer transport, forplejning, forsikring, udflugter,
                            adgangsbilletter til udflugtsmålene, smågaver og slik til ét barn.
                        </p>
                    </div>

                    <div className="tier-card">
                        <h3>Lejrsponsorat</h3>
                        <p className="tier-card__price">2.000 kr.</p>
                        <p>
                            For kr. 2.000,- kan virksomheden blive lejrsponsor og være med til at dække alle
                            omkostningerne ved børnelejren, som bl.a. omfatter ejendommens drifts- og
                            vedligeholdelsesomkostninger samt eventuelle ekstra udgifter omkring en lejr, der
                            f.eks. kan være løn til specialuddannet personale.
                        </p>
                    </div>

                    <div className="tier-card">
                        <h3>Støtte til foreningen</h3>
                        <p className="tier-card__price">Fra 1.000 kr.</p>
                        <p>
                            Virksomheder, der ønsker at støtte foreningens arbejde med et mindre beløb, kan
                            vælge at blive diplomsponsorer. Af administrative årsager skal der minimum støttes
                            med kr. 1.000,- for at man kan modtage et trykt diplom til ophængning i
                            virksomheden, men alle støttebeløb — store som små — er naturligvis velkomne.
                        </p>
                    </div>

                </div>

                <div className="sponsor__form">
                    <h2>Registrer din virksomhed</h2>
                    <p className="sponsor__form-sub">
                        Udfyld formularen herunder, så kontakter vi jer hurtigst muligt.
                    </p>

                    <div className="form">

                        <div className="form__group form__group-full">
                            <label>Støttetype</label>
                            <select value={stoettetype}
                                onChange={event => setStoettetype(event.target.value)}>
                                <option value="">Vælg støttetype...</option>
                                <option value="born">Børnesponsorat — 4.000 kr.</option>
                                <option value="lejr">Lejrsponsorat — 2.000 kr.</option>
                                <option value="stoette">Støtte til foreningen — fra 1.000 kr.</option>
                            </select>
                            {errors.stoettetype && <p className="error">{errors.stoettetype}</p>}
                        </div>

                        <div className="form__group">
                            <label>Firmanavn</label>
                            <input type="text" value={firmanavn}
                                onChange={event => setFirmanavn(event.target.value)}/>
                            {errors.firmanavn && <p className="error">{errors.firmanavn}</p>}
                        </div>

                        <div className="form__group">
                            <label>E-mailadresse</label>
                            <input type="email" value={mail}
                                onChange={event => setMail(event.target.value)}                            />
                            {errors.mail && <p className="error">{errors.mail}</p>}
                        </div>

                        <div className="form__group">
                            <label>Telefon</label>
                            <input type="tel" value={telefon}
                                onChange={event => setTelefon(event.target.value)}/>
                            {errors.telefon && <p className="error">{errors.telefon}</p>}
                        </div>

                        <div className="form__group">
                            <label>Adresse</label>
                            <input type="text" value={adresse}
                                onChange={event => setAdresse(event.target.value)}/>
                            {errors.adresse && <p className="error">{errors.adresse}</p>}
                        </div>


                        <div className="form__group form__group-full">
                            <button className="submit-btn" onClick={handleSubmit}>
                                Send tilmelding
                            </button>
                        </div>

                    </div>
                </div>

            </section>


            {showSuccess && (
                <div className="success-overlay">
                    <div className="success-overlay__popup">

                        <div className="success-overlay__icon">✓</div>

                        <h3>Tak for din tilmelding!</h3>
                        <p>
                            Vi har modtaget din tilmelding som sponsor og
                            kontakter dig hurtigst muligt på <strong>{mail}</strong>.
                        </p>

                        <Link to="/" className="success-overlay__btn">
                            Tilbage til forsiden
                        </Link>

                    </div>
                </div>
            )}

        </div>
    )
}