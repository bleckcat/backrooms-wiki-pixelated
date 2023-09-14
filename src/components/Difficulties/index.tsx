import DifficultyCard from "./components/difficultyCards"
import "./difficulties.css"

export default function Difficulties() {
  return (
    <>
      <div className="difficulties-header">
        <h2>What is a Survival Difficulty?</h2>
        <p>
          A Survival Difficulty is, true to its name, a ranking based on how
          difficult it is for one to survive in a given level. They are used in
          level entries to warn Wanderers about the possible dangers a level
          poses, and the threats one should expect and prepare for when
          exploring it.
        </p>
      </div>
      <DifficultyCard />
    </>
  )
}
