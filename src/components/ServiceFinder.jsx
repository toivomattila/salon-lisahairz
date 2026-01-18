import { useMemo, useState } from 'react'

const hairLengthOptions = [
  { value: 'short', label: 'Lyhyet (leuan yläpuolelle)' },
  { value: 'medium', label: 'Keskipitkät (olkapäille asti)' },
  { value: 'long', label: 'Pitkät (lapaluiden yli)' },
]

const goalOptions = [
  { value: 'cut', label: 'Tarvitsen perusleikkauksen' },
  { value: 'color', label: 'Haluan raikastaa väriä' },
  { value: 'color-change', label: 'Suurempi värimuutos / vaalennus' },
  { value: 'highlights', label: 'Raidat tai moniväri' },
  { value: 'treatment', label: 'Tehohoito hiuksille / hiuspohjalle' },
  { value: 'styling', label: 'Fiksu kampaus tai föönaus' },
  { value: 'brows-lashes', label: 'Ripset ja kulmat' },
]

function flattenServices(categories) {
  return categories.flatMap((category) =>
    category.services.map((service) => ({
      ...service,
      categoryId: category.id,
      categoryName: category.name,
    })),
  )
}

function ServiceFinder({ categories, timmaUrl }) {
  const [hairLength, setHairLength] = useState('medium')
  const [goal, setGoal] = useState('cut')

  const allServices = useMemo(
    () => flattenServices(categories),
    [categories],
  )

  const recommendations = useMemo(() => {
    return allServices
      .filter((service) => {
        const lengthOk =
          !hairLength || !service.lengths || service.lengths.includes(hairLength)
        const goalOk =
          !goal || !service.goals || service.goals.includes(goal)
        return lengthOk && goalOk
      })
      .slice(0, 3)
  }, [allServices, hairLength, goal])

  const activeGoal = goalOptions.find((option) => option.value === goal)
  const activeLength = hairLengthOptions.find(
    (option) => option.value === hairLength,
  )

  return (
    <div className="finder">
      <form
        className="finder-form"
        onSubmit={(event) => event.preventDefault()}
        aria-label="Palvelusuositin"
      >
        <div className="finder-fields">
          <fieldset className="finder-fieldset">
            <legend>Hiusten pituus</legend>
            <div className="finder-options finder-options-row">
              {hairLengthOptions.map((option) => (
                <label
                  key={option.value}
                  className={`finder-chip ${
                    hairLength === option.value ? 'finder-chip-active' : ''
                  }`}
                >
                  <input
                    type="radio"
                    name="hair-length"
                    value={option.value}
                    checked={hairLength === option.value}
                    onChange={() => setHairLength(option.value)}
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset className="finder-fieldset">
            <legend>Mikä kuvaa parhaiten tavoitettasi?</legend>
            <div className="finder-options">
              {goalOptions.map((option) => (
                <label
                  key={option.value}
                  className={`finder-chip finder-chip-full ${
                    goal === option.value ? 'finder-chip-active' : ''
                  }`}
                >
                  <input
                    type="radio"
                    name="goal"
                    value={option.value}
                    checked={goal === option.value}
                    onChange={() => setGoal(option.value)}
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
          </fieldset>
        </div>
        <p className="finder-hint">
          Suositukset päivittyvät automaattisesti valintojesi mukaan. Valitse
          lähinnä omaa tilannettasi vastaava vaihtoehto.
        </p>
      </form>

      <div className="finder-results" aria-live="polite">
        {recommendations.length === 0 ? (
          <p className="finder-empty">
            Valitse hiusten pituus ja tavoite nähdäksesi sinulle sopivia
            palveluja.
          </p>
        ) : (
          <>
            <p className="finder-summary">
              Suosittelemme seuraavia palveluja{' '}
              {activeLength ? activeLength.label.toLowerCase() : ''}{' '}
              hiuksille, kun tavoitteena on{' '}
              {activeGoal ? activeGoal.label.toLowerCase() : 'hiusten huolto'}:
            </p>
            <ul className="finder-cards">
              {recommendations.map((service) => (
                <li key={service.id} className="finder-card">
                  <div className="finder-card-header">
                    <h3>{service.name}</h3>
                    <span className="finder-card-price">{service.price}</span>
                  </div>
                  <p className="finder-card-category">{service.categoryName}</p>
                  {service.description ? (
                    <p className="finder-card-description">
                      {service.description}
                    </p>
                  ) : null}
                  {service.duration ? (
                    <p className="finder-card-duration">
                      Arvioitu kesto: {service.duration}
                    </p>
                  ) : null}
                  <a
                    href={timmaUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="finder-card-cta"
                  >
                    Varaa aika Timman kautta
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  )
}

export default ServiceFinder

