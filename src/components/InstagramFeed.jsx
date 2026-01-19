import { useEffect } from 'react'

const FOUITA_SCRIPT_SRC = 'https://wdg.fouita.com/widgets/0x3ab5a7.js'

function InstagramFeed() {
  useEffect(() => {
    if (typeof document === 'undefined') return

    const existingScript = document.querySelector(
      `script[src="${FOUITA_SCRIPT_SRC}"]`,
    )

    if (existingScript) {
      return
    }

    const script = document.createElement('script')
    script.src = FOUITA_SCRIPT_SRC
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <div className="instagram-widget">
      <div
        data-key="Instagram Feed  "
        className="ft"
        id="ftjclbz3eg"
      ></div>
    </div>
  )
}

export default InstagramFeed

