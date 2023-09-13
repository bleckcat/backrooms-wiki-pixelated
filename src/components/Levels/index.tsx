import { useState } from "react"
import levels from "../../helpers/levels"
import { ILevels } from "../../helpers/levels/levels.interface"
import "./levels.css"

export default function Levels() {
  const [activeDescription, setActiveDescription] = useState<number>(0)
  return (
    <>
      <div>
        <h5>{levels[activeDescription].title}</h5>
        <h5>{levels[activeDescription].difficulty}</h5>
      </div>
      <section aria-label="Gallery">
        <div
          className="gallery js-flickity"
          data-flickity-options='{ "wrapAround": true }'
        >
          {levels.map(({ title, image }: ILevels, index: number) => (
            <div className="gallery-cell" key={`carousel-cell-${index}`}>
              <div
                className="level-frame"
                onClick={() => setActiveDescription(index)}
              >
                <img className="frame-image" src={image} alt={title} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
