import './App.css'

import ServiceFinder from './components/ServiceFinder'
import InstagramFeed from './components/InstagramFeed'

const TIMMA_URL = 'https://varaa.timma.fi/salonlisahairz'
const INSTAGRAM_URL = 'https://www.instagram.com/salonlisahairz/'
const FACEBOOK_URL = 'https://www.facebook.com/salonlisahairz/'

const serviceCategories = [
  {
    id: 'cuts',
    name: 'Leikkaukset',
    description:
      'Yksilölliset leikkaukset naisille, miehille ja lapsille – sisältäen pesun ja kevyen viimeistelyn.',
    services: [
      {
        id: 'kampaamoleikkaus',
        name: 'Kampaamoleikkaus',
        price: '40 €',
        duration: '45 min',
        description:
          'Hiusten siistiminen tai mallinmuutos. Sisältää pesun ja föönauksen.',
        lengths: ['short', 'medium', 'long'],
        goals: ['cut'],
      },
      {
        id: 'otsatukan-leikkaus',
        name: 'Otsatukan leikkaus',
        price: '22 €',
        duration: '15 min',
        description: 'Otsatukan siistiminen ja muotoilu.',
        lengths: ['short', 'medium', 'long'],
        goals: ['cut'],
      },
      {
        id: 'parturileikkaus',
        name: 'Parturileikkaus',
        price: '37 €',
        duration: '30 min',
        description:
          'Lyhyiden hiusten leikkaus ja viimeistely koneella ja saksilla.',
        lengths: ['short'],
        goals: ['cut'],
      },
      {
        id: 'lasten-leikkaus',
        name: 'Lasten hiustenleikkaus (alle 12 v)',
        price: '30 €',
        duration: '30 min',
        description: 'Lapsille suunnattu hiustenleikkaus, sisältää pesun.',
        lengths: ['short', 'medium'],
        goals: ['cut'],
      },
      {
        id: 'koneajo',
        name: 'Koneajo',
        price: '22 €',
        duration: '15–20 min',
        description: 'Hiusten ajo koneella, koko pää yhdellä pituudella.',
        lengths: ['short'],
        goals: ['cut'],
      },
    ],
  },
  {
    id: 'colors',
    name: 'Värjäykset',
    description:
      'Kokonaisvaltaiset värjäykset ja leikkaukset hiustesi pituuden mukaan – sisältävät pesun, föönauksen ja viimeistelyn.',
    services: [
      {
        id: 'vari-leikkaus-lyhyet',
        name: 'Väri ja leikkaus (lyhyet)',
        price: '110 €',
        duration: '2 h',
        description:
          'Värjäys ja leikkaus, kun hiukset ovat leukalinjan yläpuolella.',
        lengths: ['short'],
        goals: ['color'],
      },
      {
        id: 'vari-leikkaus-keskipitkat',
        name: 'Väri ja leikkaus (keskipitkät)',
        price: '120 €',
        duration: '2–2,5 h',
        description:
          'Värjäys ja leikkaus, kun hiukset ulottuvat olkapäille asti.',
        lengths: ['medium'],
        goals: ['color'],
      },
      {
        id: 'vari-leikkaus-pitkat',
        name: 'Väri ja leikkaus (pitkät)',
        price: '140 €',
        duration: '2,5 h',
        description:
          'Värjäys ja leikkaus, kun hiukset ulottuvat lapaluiden yläpuolelle.',
        lengths: ['long'],
        goals: ['color'],
      },
      {
        id: 'vari-leikkaus-extrapitkat',
        name: 'Väri ja leikkaus (extrapitkät)',
        price: '150 €',
        duration: '3 h',
        description:
          'Värjäys ja leikkaus, kun hiukset ulottuvat lapaluiden alapuolelle.',
        lengths: ['long'],
        goals: ['color'],
      },
      {
        id: 'tyvivari-leikkaus',
        name: 'Tyviväri ja leikkaus',
        price: '105 €',
        duration: '2 h',
        description:
          'Tyvivärjäys (enintään 3 cm) ja leikkaus, sisältää pesun ja viimeistelyn.',
        lengths: ['short', 'medium', 'long'],
        goals: ['color'],
      },
      {
        id: 'vaalennus-leikkaus-lyhyet',
        name: 'Vaalennus & leikkaus (lyhyet)',
        price: '130 €',
        duration: '2,5–3 h',
        description:
          'Vaalennusta vaativat työt lyhyille hiuksille, sisältää sävyn, leikkauksen ja viimeistelyn.',
        lengths: ['short'],
        goals: ['color', 'color-change'],
      },
      {
        id: 'vaalennus-leikkaus-puolipitkat',
        name: 'Vaalennus & leikkaus (puolipitkät)',
        price: '140 €',
        duration: '3 h',
        description:
          'Vaalennusta vaativat työt puolipitkille hiuksille, sisältää sävyn, leikkauksen ja viimeistelyn.',
        lengths: ['medium'],
        goals: ['color', 'color-change'],
      },
      {
        id: 'vaalennus-leikkaus-pitkat',
        name: 'Vaalennus & leikkaus (pitkät)',
        price: '150 €',
        duration: '3–3,5 h',
        description:
          'Vaalennusta vaativat työt pitkille hiuksille, sisältää sävyn, leikkauksen ja viimeistelyn.',
        lengths: ['long'],
        goals: ['color', 'color-change'],
      },
      {
        id: 'vaalennus-leikkaus-extrapitkat',
        name: 'Vaalennus & leikkaus (extrapitkät)',
        price: '180 €',
        duration: '3,5–4 h',
        description:
          'Vaalennusta vaativat työt erittäin pitkille hiuksille, sisältää sävyn, leikkauksen ja viimeistelyn.',
        lengths: ['long'],
        goals: ['color', 'color-change'],
      },
    ],
  },
  {
    id: 'highlights',
    name: 'Monivärit & raidat',
    description:
      'Monivärjäykset ja raidat luovat eloa ja moniulotteisuutta hiuksiin – hinnat ovat alkaen hintoja.',
    services: [
      {
        id: 'monivari-leikkaus-lyhyet',
        name: 'Moniväri ja leikkaus (lyhyet)',
        price: '120 €',
        duration: '2–2,5 h',
        description:
          'Monivärivärjäys ja leikkaus lyhyille hiuksille, sisältää pesun ja föönauksen.',
        lengths: ['short'],
        goals: ['highlights'],
      },
      {
        id: 'monivari-leikkaus-keskipitkat',
        name: 'Moniväri ja leikkaus (keskipitkät)',
        price: '130 €',
        duration: '2,5 h',
        description:
          'Monivärivärjäys ja leikkaus keskipitkille hiuksille, hinnat alkaen.',
        lengths: ['medium'],
        goals: ['highlights'],
      },
      {
        id: 'monivari-leikkaus-pitkat',
        name: 'Moniväri ja leikkaus (pitkät)',
        price: '150 €',
        duration: '3 h',
        description:
          'Monivärivärjäys ja leikkaus pitkille hiuksille, hinnat alkaen.',
        lengths: ['long'],
        goals: ['highlights'],
      },
      {
        id: 'monivari-leikkaus-extrapitkat',
        name: 'Moniväri ja leikkaus (extrapitkät)',
        price: '170 €',
        duration: '3–3,5 h',
        description:
          'Monivärivärjäys ja leikkaus erittäin pitkille hiuksille, hinnat alkaen.',
        lengths: ['long'],
        goals: ['highlights'],
      },
      {
        id: 'raidat-leikkaus-lyhyet',
        name: 'Raidat ja leikkaus (lyhyet)',
        price: '120 €',
        duration: '2–2,5 h',
        description:
          'Raidat ja leikkaus lyhyille hiuksille, sisältää pesun ja viimeistelyn.',
        lengths: ['short'],
        goals: ['highlights'],
      },
      {
        id: 'raidat-leikkaus-keskipitkat',
        name: 'Raidat ja leikkaus (keskipitkät)',
        price: '130 €',
        duration: '2,5 h',
        description:
          'Raidat ja leikkaus keskipitkille hiuksille, hinnat alkaen.',
        lengths: ['medium'],
        goals: ['highlights'],
      },
      {
        id: 'raidat-leikkaus-pitkat',
        name: 'Raidat ja leikkaus (pitkät)',
        price: '150 €',
        duration: '3 h',
        description:
          'Raidat ja leikkaus pitkille hiuksille, hinnat alkaen.',
        lengths: ['long'],
        goals: ['highlights'],
      },
      {
        id: 'raidat-leikkaus-extrapitkat',
        name: 'Raidat ja leikkaus (extrapitkät)',
        price: '170 €',
        duration: '3–3,5 h',
        description:
          'Raidat ja leikkaus erittäin pitkille hiuksille, hinnat alkaen.',
        lengths: ['long'],
        goals: ['highlights'],
      },
    ],
  },
  {
    id: 'styling',
    name: 'Kampaukset & viimeistely',
    description:
      'Päivittäiseen freesaamiseen tai juhliin – hiusten pesu, föönaus ja kevyet kampaukset.',
    services: [
      {
        id: 'pesu-foonaus',
        name: 'Hiustenpesu ja föönaus',
        price: '35 €',
        duration: '30–40 min',
        description:
          'Rauhallinen pesuhetki ja föönattu, viimeistelty kampaus arkeen tai juhlaan.',
        lengths: ['short', 'medium', 'long'],
        goals: ['styling'],
      },
      {
        id: 'pikakampaus',
        name: 'Pikakampaus',
        price: '47 €',
        duration: '45 min',
        description:
          'Kevyt kampaus, joka viimeistelee päivän tai bilelookin nopeasti.',
        lengths: ['short', 'medium', 'long'],
        goals: ['styling'],
      },
    ],
  },
  {
    id: 'brows-lashes',
    name: 'Ripset & kulmat',
    description:
      'Huolitellut ripset ja kulmat viimeistelevät ilmeen – nopea tapa freesata kasvot.',
    services: [
      {
        id: 'ripsien-varjays',
        name: 'Ripsien värjäys',
        price: '25 €',
        duration: '20–30 min',
        description: 'Ripsien värjäys kestovärillä.',
        lengths: ['short', 'medium', 'long'],
        goals: ['brows-lashes'],
      },
      {
        id: 'ripset-kulmat-varjays-muotoilu',
        name: 'Ripsien ja kulmien värjäys & muotoilu',
        price: '35 €',
        duration: '30 min',
        description:
          'Ripsien ja kulmien värjäys kestovärillä sekä kulmien muotoilu.',
        lengths: ['short', 'medium', 'long'],
        goals: ['brows-lashes'],
      },
      {
        id: 'kulmien-varjays-muotoilu',
        name: 'Kulmien värjäys & muotoilu',
        price: '25 €',
        duration: '20–30 min',
        description: 'Kulmien muotoilu ja värjäys kestovärillä.',
        lengths: ['short', 'medium', 'long'],
        goals: ['brows-lashes'],
      },
    ],
  },
  {
    id: 'treatments',
    name: 'Hiushoidot & tehohoidot',
    description:
      'Kohdennetut tehohoidot hiuksille ja hiuspohjalle – valitse tarpeesi mukaan kosteuttava, korjaava tai tuuheuttava hoito.',
    services: [
      {
        id: 'balance-tehohoito',
        name: 'Balance – tehohoito',
        price: '60 €',
        duration: '45–60 min',
        description:
          'Yliherkälle, kuivalle tai ärtyneelle hiuspohjalle suunnattu intensiivinen tehohoito.',
        lengths: ['short', 'medium', 'long'],
        goals: ['treatment'],
      },
      {
        id: 'color-save-tehohoito',
        name: 'Color Save – tehohoito',
        price: '60 €',
        duration: '45–60 min',
        description:
          'Värjätyille hiuksille – auttaa säilyttämään värin, pehmeyden ja kiillon pidempään.',
        lengths: ['short', 'medium', 'long'],
        goals: ['treatment'],
      },
      {
        id: 'repair-tehohoito',
        name: 'Repair – tehohoito',
        price: '60 €',
        duration: '45–60 min',
        description:
          'Syväkorjaava hoito vaurioituneille hiuksille – vähentää katkeilua ja vahvistaa hiusta.',
        lengths: ['short', 'medium', 'long'],
        goals: ['treatment'],
      },
      {
        id: 'keratin-restore-tehohoito',
        name: 'Keratin Restore – tehohoito',
        price: '60 €',
        duration: '45–60 min',
        description:
          'Hiuskuitua korjaava hoito, joka tekee hiuksista pehmeät ja helpommin käsiteltävät.',
        lengths: ['short', 'medium', 'long'],
        goals: ['treatment'],
      },
      {
        id: 'hydrate-tehohoito',
        name: 'Hydrate – tehohoito',
        price: '60 €',
        duration: '45–60 min',
        description:
          'Syväkosteuttava hoito kuiville hiuksille – palauttaa kosteuden ja joustavuuden.',
        lengths: ['short', 'medium', 'long'],
        goals: ['treatment'],
      },
      {
        id: 'volumize-tehohoito',
        name: 'Volumize – tehohoito',
        price: '60 €',
        duration: '45–60 min',
        description:
          'Tuuheuttava hoito, joka antaa rakennetta ja ryhtiä hiuksille ilman raskautta.',
        lengths: ['short', 'medium', 'long'],
        goals: ['treatment'],
      },
      {
        id: 'smoothen-tehohoito',
        name: 'Smoothen – tehohoito',
        price: '60 €',
        duration: '45–60 min',
        description:
          'Pehmentävä hoito, joka vähentää pörröisyyttä ja tekee hiuksista helpommin hallittavat.',
        lengths: ['short', 'medium', 'long'],
        goals: ['treatment'],
      },
    ],
  },
]

function App() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="app">
      <header className="site-header">
        <div className="site-header-inner container">
          <a href="#hero" className="brand">
            <span className="brand-mark">Salon</span>
            <span className="brand-name">LisaHairz</span>
          </a>
          <nav className="main-nav" aria-label="Päävalikko">
            <div className="main-nav-links">
              <a href="#services">Palvelut & hinnasto</a>
              <a href="#about">Meistä</a>
              <a href="#finder">Löydä palvelu</a>
              <a href="#contact">Yhteystiedot</a>
            </div>
            <div className="main-nav-actions">
              <div className="nav-social" aria-label="Salon LisaHairzin sosiaalinen media">
                <a
                  href={INSTAGRAM_URL}
                  className="nav-social-link"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Salon LisaHairz Instagramissa"
                >
                  <svg
                    className="nav-social-icon"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4.2" />
                    <circle cx="17" cy="7" r="1.3" />
                  </svg>
                </a>
                <a
                  href={FACEBOOK_URL}
                  className="nav-social-link"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Salon LisaHairz Facebookissa"
                >
                  <svg
                    className="nav-social-icon"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M14 8h2.2V5.5H14c-2.3 0-4.1 1.8-4.1 4.1V12H8v2.7h1.9V19h2.9v-4.3h2.2L16.5 12H12v-2.4c0-.9.7-1.6 1.6-1.6Z" />
                  </svg>
                </a>
              </div>
              <a
                href={TIMMA_URL}
                className="nav-cta"
                target="_blank"
                rel="noreferrer"
              >
                Varaa aika
              </a>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <section id="hero" className="hero" aria-labelledby="hero-heading">
          <div className="hero-gradient" aria-hidden="true" />
          <div className="hero-inner container">
            <div className="hero-text">
              <p className="eyebrow">Kampaamo Lahti · Vesijärvenkatu 52</p>
              <h1 id="hero-heading">
                Salon LisaHairz – moderni kampaamo Lahden keskustassa
              </h1>
              <p className="hero-lead">
                Yksilölliset leikkaukset, monipuoliset värjäykset ja
                hoitavat palvelut. Pieni, lämminhenkinen salonki, jossa
                jokaiselle varataan riittävästi aikaa.
              </p>
              <div className="hero-actions">
                <a
                  href={TIMMA_URL}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Varaa aika Timman kautta
                </a>
                <a href="#services" className="btn btn-secondary">
                  Katso palvelut & hinnasto
                </a>
              </div>
              <div className="hero-meta">
                <span>Vesijärvenkatu 52, 15140 Lahti</span>
                <span>
                  Puhelin:{' '}
                  <a href="tel:+358407435724" className="hero-phone">
                    040 743 5724
                  </a>
                </span>
              </div>
            </div>
            <aside className="hero-highlight" aria-label="Suosituimmat palvelut">
              <h2>Suosituimmat palvelut</h2>
              <ul>
                <li>
                  <span>Kampaamoleikkaus</span>
                  <span className="price">40 €</span>
                </li>
                <li>
                  <span>Väri ja leikkaus (keskipitkät)</span>
                  <span className="price">120 €</span>
                </li>
                <li>
                  <span>Raidat ja leikkaus (pitkät)</span>
                  <span className="price">150 €</span>
                </li>
                <li>
                  <span>Repair– tai Hydrate–tehohoito</span>
                  <span className="price">60 €</span>
                </li>
              </ul>
              <p className="hero-note">
                Ajanvaraus hoituu turvallisesti Timman kautta. Hinnat ovat
                alkaen hintoja ja tarkentuvat hiusten kunnon ja pituuden
                mukaan.
              </p>
            </aside>
          </div>
        </section>

        <section
          id="services"
          className="section section-services"
          aria-labelledby="services-heading"
        >
          <div className="container">
            <header className="section-header">
              <h2 id="services-heading">Palvelut & hinnasto</h2>
              <p className="section-intro">
                Kaikki peruskampaamopalvelut saman katon alta – leikkaukset,
                värjäykset, raidat ja hiushoidot. Hinnat ovat suuntaa antavia
                ja sisältävät pesun, föönauksen sekä viimeistelyn, ellei
                toisin mainita.
              </p>
            </header>

            {serviceCategories.map((category) => (
              <article
                key={category.id}
                className="service-category"
                aria-label={category.name}
              >
                <header className="service-category-header">
                  <div>
                    <h3>{category.name}</h3>
                    <p>{category.description}</p>
                  </div>
                  <a
                    href={TIMMA_URL}
                    className="category-cta"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Varaa aika
                  </a>
                </header>
                <ul className="service-list">
                  {category.services.map((service) => (
                    <li key={service.id} className="service-item">
                      <div className="service-main">
                        <h4>{service.name}</h4>
                        {service.description ? (
                          <p>{service.description}</p>
                        ) : null}
                      </div>
                      <div className="service-meta">
                        {service.duration ? (
                          <span className="service-duration">
                            {service.duration}
                          </span>
                        ) : null}
                        <span className="service-price">{service.price}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section
          id="finder"
          className="section section-finder"
          aria-labelledby="finder-heading"
        >
          <div className="container">
            <header className="section-header section-header-inline">
              <div>
                <h2 id="finder-heading">Mikä palvelu sopii sinulle?</h2>
                <p className="section-intro">
                  Jos et ole varma, mikä palvelu kannattaa valita Timman
                  listalta, vastaa pariin kysymykseen. Suosittelija nostaa
                  esiin juuri sinulle sopivat vaihtoehdot.
                </p>
              </div>
            </header>
            <ServiceFinder categories={serviceCategories} timmaUrl={TIMMA_URL} />
          </div>
        </section>

        <section
          id="about"
          className="section section-about"
          aria-labelledby="about-heading"
        >
          <div className="container about-grid">
            <div className="about-text">
              <h2 id="about-heading">Salon LisaHairz</h2>
              <p>
                Salon LisaHairz on vuonna 2021 perustettu, Lisa-Mari
                Vattulaisen luotsaama kampaamo Lahden keskustassa. Pieni
                ja tunnelmallinen salonki tarjoaa rauhallisen hetken
                arjen keskelle – ilman kiirettä ja turhaa hälinää.
              </p>
              <p>
                Panostamme ajantasaisiin leikkaus- ja värjäystekniikoihin,
                laadukkaisiin tuotteisiin sekä rehelliseen neuvontaan.
                Yhdessä suunnitellaan hiustyyli, joka sopii juuri sinun
                arkeesi ja hiustesi kuntoon.
              </p>
              <p>
                Olitpa tulossa pikasiistimiseen, isompaan värimuutokseen
                tai rentouttavaan hiushoitoon, tavoite on aina sama:
                hyvä olo ja hiukset, joista on helppo pitää huolta
                myös kotona.
              </p>
              <div className="about-links">
                <a
                  href={TIMMA_URL}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Varaa aika Timman kautta
                </a>
              </div>
            </div>
            <aside className="about-photo" aria-label="Salonki tunnelma">
              <img
                src="https://images.pexels.com/photos/3738343/pexels-photo-3738343.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Tunnelmallinen hiussalonki, jossa asiakas ja kampaaja"
                width="800"
                height="1200"
              />
            </aside>
          </div>
        </section>

        <section className="section section-photo-break" aria-label="Tunnelma Salon LisaHairzissa">
          <div className="section-photo-break-inner">
            <h2>Rauhallinen hetki itsellesi Lahden keskustassa</h2>
            <p>
              Varaa aika hiustenleikkaukseen, värimuutokseen tai hoitoon ja
              hengähdä hetki kiireen keskellä. Lämmin, pieni salonki ja
              ammattitaitoinen palvelu odottavat sinua Vesijärvenkadulla.
            </p>
            <a
              href={TIMMA_URL}
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Varaa hetki itsellesi Timman kautta
            </a>
          </div>
        </section>


        <section
          id="instagram"
          className="section section-instagram"
          aria-labelledby="instagram-heading"
        >
          <div className="container">
            <header className="section-header">
              <h2 id="instagram-heading">Seuraa meitä Instagramissa</h2>
              <p className="section-intro">
                Kurkista salonkiin ja katso tuoreimmat hiusinspiraatiot
                @salonlisahairz-tililtä.
              </p>
            </header>
            <InstagramFeed />
          </div>
        </section>

        <section
          id="contact"
          className="section section-contact"
          aria-labelledby="contact-heading"
        >
          <div className="container contact-grid">
            <div className="contact-main">
              <h2 id="contact-heading">Yhteystiedot & ajanvaraus</h2>
              <p className="section-intro">
                Varaa aika helposti Timman kautta tai kysy lisätietoja
                puhelimitse. Tervetuloa Salon LisaHairziin Lahden
                keskustaan!
              </p>
              <dl className="contact-list">
                <div>
                  <dt>Osoite</dt>
                  <dd>Vesijärvenkatu 52, 15140 Lahti</dd>
                </div>
                <div>
                  <dt>Puhelin</dt>
                  <dd>
                    <a href="tel:+358407435724">040 743 5724</a>
                  </dd>
                </div>
                <div>
                  <dt>Online-ajanvaraus</dt>
                  <dd>
                    <a
                      href={TIMMA_URL}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Timma – Salon LisaHairz
                    </a>
                  </dd>
                </div>
              </dl>
              <div className="contact-actions">
                <a
                  href={TIMMA_URL}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Varaa aika Timman kautta
                </a>
                <a href="tel:+358407435724" className="btn btn-secondary">
                  Soita 040 743 5724
                </a>
              </div>
            </div>
            <aside className="contact-card">
              <h3>Saapuminen</h3>
              <p>
                Salonki sijaitsee Lahden keskustassa, Vesijärvenkadulla.
                Lähettyvillä on kadunvarsipysäköintiä ja
                pysäköintitaloja, joista on lyhyt kävelymatka
                liikkeeseen.
              </p>
              <p>
                Suosittelemme varaamaan hieman ylimääräistä aikaa
                pysäköintiin, jotta voit aloittaa käyntisi
                rauhallisin mielin.
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Vesij%C3%A4rvenkatu+52+15140+Lahti"
                target="_blank"
                rel="noreferrer"
                className="map-link"
              >
                Avaa osoite Google Mapsissa
              </a>
            </aside>
          </div>
          <div
            className="container contact-map-wrapper"
            aria-label="Salon LisaHairzin sijainti kartalla"
          >
            <div className="contact-map">
              <iframe
                title="Salon LisaHairz kartalla"
                src="https://www.google.com/maps?q=Vesij%C3%A4rvenkatu+52+15140+Lahti&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen=""
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <p className="footer-logo">
              Salon <span>LisaHairz</span>
            </p>
            <p className="footer-text">
              Kampaamo- ja parturipalvelut Lahden keskustassa.
            </p>
          </div>
          <div
            className="footer-social"
            aria-label="Salon LisaHairzin sosiaalisen median linkit"
          >
            <a
              href="https://www.instagram.com/salonlisahairz/"
              className="footer-social-link"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/salonlisahairz/"
              className="footer-social-link"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </div>
          <div className="footer-meta">
            <p>Y-tunnus 3244579-2</p>
            <p>© {currentYear} Salon LisaHairz. Kaikki oikeudet pidätetään.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
