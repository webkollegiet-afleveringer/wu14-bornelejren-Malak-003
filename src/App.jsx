import { useState } from "react"
import { Outlet, Link, NavLink } from "react-router"

export default function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header>
        <Link className="logo" to="/" onClick={() => setIsOpen(false)}>
          <img src="/logo.jfif" />
        </Link>

        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <img src="/menu.png" alt="menu" />
        </button>

        <nav className={isOpen ? "nav--open" : ""}>
          <NavLink to="/" end onClick={() => setIsOpen(false)}>Forside</NavLink>
          <NavLink to="/om-os" onClick={() => setIsOpen(false)}>Om os</NavLink>
          <NavLink to="/sponsor" onClick={() => setIsOpen(false)}>Tilmeld som sponsor</NavLink>
          <NavLink to="/takker" onClick={() => setIsOpen(false)}>Børnelejren takker</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="footer">
        <div className="footer__inner">

          <div className="footer__kolonne logoKolonne">
            <img src="/logo.jfif" alt="" />
            <h3> Børnelejren <br /> på Langeland</h3>
          </div>

          <div className="footer__kolonne">
            <h3>Sekretariatet og administration</h3>
            <p>Knud Bro Alle 1, st. mf.</p>
            <p>3660 Stenløse</p>
            <p>Telefon: 38 71 12 60</p>
            <p>E-mail: <a href="mailto:info@lejren.dk">info@lejren.dk</a></p>
            <p>Hjemmeside: <a href="http://www.lejren.dk" target="_blank">www.lejren.dk</a></p>
            <p>SEnr. 26917425</p>
          </div>

          <div className="footer__kolonne">
            <h3>Bankoplysninger</h3>
            <p>Danske Bank: reg.nr. 1551 konto 10008182</p>
            <p>Merkur Bank: reg.nr. 8401 konto 1077819</p>
            <p>Merkur Bank: reg.nr. 8401 konto 4215119</p>
            <p>MobilePay: 27231</p>
          </div>

          <div className="footer__kolonne">
            <h3>Lejren</h3>
            <p>Søgård Hovedgård</p>
            <p>Søgårdsvej 8A</p>
            <p>5935 Bagenkop</p>
            <p className="footer__links">
              <NavLink to="/om-os">Om os</NavLink>
              <NavLink to="/sponsor">Bliv sponsor</NavLink>
              <NavLink to="/takker">Børnelejren takker</NavLink>
            </p>
          </div>

        </div>


      </footer>
    </>
  )
}