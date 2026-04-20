export default function Takker() {

    const sponsorListe = [
        {
            year: 2025,
            sponsorer: [
                { navn: "Medarbejdernes Honorarfond i Novo Gruppen", belob: "25.000" },
                { navn: "Aage og Johanne Louis-Hansens Fond", belob: "20.000" },
            ]
        },
        {
            year: 2024,
            sponsorer: [
                { navn: "Civilingeniør H.C. Bechgaard og hustru Ella Mary Bechgaards Fond", belob: "100.000" },
                { navn: "Medarbejdernes Honorarfond i Novo Gruppen", belob: "25.000" },
                { navn: "Otto Bruuns Fond", belob: "60.000" },
            ]
        },
        {
            year: 2023,
            sponsorer: [
                { navn: "Civilingeniør H.C. Bechgaard og hustru Ella Mary Bechgaards Fond", belob: "100.000" },
                { navn: "Medarbejdernes Honorarfond i Novo Gruppen", belob: "25.000" },
                { navn: "Otto Bruuns Fond", belob: "60.000" },
                { navn: "Aage og Johanne Louis-Hansens Fond", belob: "20.000" },
            ]
        },
        {
            year: 2022,
            sponsorer: [
                { navn: "Ingemann Graphics", belob: "10.000" },
                { navn: "Otto Bruuns Fond", belob: "50.000" },
                { navn: "Medarbejdernes Honorarfond i Novo Gruppen", belob: "25.000" },
            ]
        },
    ]

    return (
        <div className="takker">

            <section className="takker__hero">
                <h1>Børnelejren takker</h1>
            </section>

            <section className="takker__content">

                <div className="takker__intro">
                    <p>
                        Børnelejren på Langeland takker alle, der på den ene eller anden måde
                        har støttet foreningens arbejde med at sende dårligt stillede børn på
                        et ophold på Søgård Hovedgård — det være sig ved naturaliesponsorater
                        eller økonomisk støtte fra støttemedlemmer, virksomhedssponsorer og
                        donationer fra fonde.
                    </p>
                </div>

                <div className="takker__sponsors">
                    <h2>En særlig tak til</h2>
                    <p className="takker__sponsors-sub">
                        Følgende virksomheder, fonde og privatpersoner har ydet en særlig indsats
                        for foreningens arbejde:
                    </p>

                    <div className="sponsors__list">
                        {sponsorListe.map((gruppe) => (
                            <div className="sponsor-gruppe" key={gruppe.year}>

                                <div className="sponsor-gruppe__year">
                                    <span>{gruppe.year}</span>
                                </div>

                                <div className="sponsor-gruppe__navne">
                                    {gruppe.sponsorer.map((sponsor) => (
                                        <div className="sponsor-raekke" key={sponsor.navn}>
                                            <span className="sponsor-raekke__navn">{sponsor.navn}</span>
                                            <span className="sponsor-raekke__belob">kr. {sponsor.belob}</span>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        ))}
                    </div>
                </div>


            </section>
        </div>
    )
}