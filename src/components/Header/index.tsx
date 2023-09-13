import "./header.css"

export default function Header() {
  return (
    <nav className="main-header">
      <img src="assets/logo.png" alt="logo" />
      <div className="backrooms-description">
        <h1>The Backrooms</h1>
        <p>
          If you're not careful and noclip out of reality in the wrong areas,
          you'll end up in the Backrooms, where it's nothing but the stink of
          old moist carpet, the madness of mono-yellow, the endless background
          noise of fluorescent lights at maximum hum-buzz, and approximately six
          hundred million square miles of randomly segmented empty rooms to be
          trapped in. God save you if you hear something wandering around
          nearby, because it sure as hell has heard you.
        </p>
      </div>
    </nav>
  )
}
