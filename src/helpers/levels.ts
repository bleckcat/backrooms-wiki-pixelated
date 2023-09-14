import { ILevels } from "./levels/levels.interface"
import habitableZone from "./levels/habitableZone"
import pipeDreams from "./levels/pipeDreams"
import theLobby from "./levels/theLobby"
import eletricalStation from "./levels/eletricalStation"

const levels: Array<ILevels> = [
  theLobby,
  habitableZone,
  pipeDreams,
  eletricalStation,
]

export default levels
