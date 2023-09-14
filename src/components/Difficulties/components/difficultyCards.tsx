import { difficulties } from "../../../helpers/difficulties"
import "./difficultyCards.css"

export default function DifficultyCard() {
  return difficulties.map((difficult, index) => (
    <>
      <div className="difficult-card-container" key={`container-${index}`}>
        <div className="difficult-card-title-wrap">
          <div
            className="card-title"
            style={{ backgroundColor: difficult.color }}
          >
            <h3>{difficult.title}</h3>
          </div>
          <img src={difficult.image} alt={difficult.title} />
        </div>
        <div className="difficult-card-content-wrap">
          <ol>
            {difficult.aspects.map((aspect, aspIndex) => (
              <li key={`aspect-${aspIndex}`}>
                <h3>{aspect}</h3>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <p key={`content-${index}`}>{difficult.content}</p>
    </>
  ))
}
