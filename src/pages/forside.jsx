import { Link } from "react-router"

export default function Forside() {
    return (
        <div className="forside">

            <section className="forside__hero">
                <div className="hero-inner">
                    <h1>Giv et barn <br /> en<span> uforglemmelig</span> <br /> sommer</h1>
                    <p>
                        Børnelejren på Langeland sender dårligt stillede børn og unge
                        på ophold i naturskønne omgivelser på det smukke Sydlangeland.
                    </p>
                    <Link to="/sponsor" >Bliv sponsor i dag</Link>
                </div>
            </section>

            <section className="welcome">
                <div className="welcome__container">
                    <h2>Velkommen</h2>
                    <span>                       Børnelejren på Langeland er en forening, der udelukkende har til formål
                        at sende dårligt stillede børn og unge sammen med deres pædagoger på et
                        ophold i landlige omgivelser på det naturskønne Sydlangeland.</span>

                    <p>
                        Der er mange børn i verden, der ikke har det så godt, som de burde have
                        det. Det gælder desværre også i Danmark. Der er børn med medfødte handicap,
                        børn der er blevet alvorligt syge, børn der lider under omsorgssvigt eller
                        bliver udsat for overgreb, børn der har mistet én af eller begge deres
                        forældre, børn der er tvangsfjernet fra deres hjem og familie, børn der
                        bliver mobbet i skolen, børn der vokser op i meget fattige familier, børn
                        fra skilsmisse- og sammenbragte familier — vi kender allesammen et barn,
                        der tilhører en af disse grupper, og det er disse børn, vi gerne vil gøre
                        noget for.
                    </p>
                    <p>
                        Foreningen Børnelejren på Langeland samler penge ind fra erhvervslivet,
                        fonde og private til at sende dårligt stillede børn på et velfortjent
                        lejrophold på Søgård. <strong>Hjælp os med at hjælpe dem!</strong>
                    </p>
                </div>
                <img src="/57325198_2075682595883031_8842221344629194752_n.jpg" alt="" />
            </section>


        </div>
    )
}