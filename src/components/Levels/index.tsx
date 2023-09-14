import { useMemo, useState } from "react"
import levels from "../../helpers/levels"
import { ILevels } from "../../helpers/levels/levels.interface"
import "./levels.css"
import { difficulties } from "../../helpers/difficulties"

export default function Levels() {
  const [activeDescription, setActiveDescription] = useState<number>(0)

  const activeLevel: ILevels = useMemo(
    () => levels[activeDescription],
    [activeDescription]
  )

  return (
    <>
      <div>
        <hr />
        <h1>First 8 canon levels</h1>
        <div className="level-lebal">
          <h4>Selected:</h4>
          <h2>{activeLevel.title}</h2>
          <h4 style={{ color: difficulties[activeLevel.difficulty].color }}>
            {difficulties[activeLevel.difficulty].title}
          </h4>
        </div>
        <section aria-label="Gallery">
          <div className="carousel">
            {levels.map(({ title, image }: ILevels, index: number) => (
              <div
                className={`carousel-frame ${
                  activeLevel.title === title && "active-frame"
                }`}
                key={`carousel-cell-${index}`}
              >
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
        <section aria-label="description">
          <h2>Description</h2>
          {activeLevel.content.description()}
          {activeLevel.content.entities && (
            <>
              <h2>Entities</h2>
              {activeLevel.content.entities()}
            </>
          )}
          {activeLevel.content.coloniesAndOutposts && (
            <>
              <h2>Colonies and Outposts</h2>
              {activeLevel.content.coloniesAndOutposts()}
            </>
          )}
          {activeLevel.content.inAndOuts && (
            <>
              <h2>Entrances</h2>
              {activeLevel.content.inAndOuts.entrances()}
            </>
          )}
          {activeLevel.content.inAndOuts && (
            <>
              <h2>Exits</h2>
              {activeLevel.content.inAndOuts.exits()}
            </>
          )}
        </section>
      </div>
    </>
  )
}
