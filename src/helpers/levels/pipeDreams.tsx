import { ILevels } from "./levels.interface"

const pipeDreams: ILevels = {
  title: "Pipe Dreams",
  image: "assets/pipe-dreams.png",
  difficulty: 2,
  content: {
    description: () => {
      return (
        <>
          <p>
            Level 2 consists of long, dim concrete maintenance hallways with
            steam pipes lining the walls and ceilings. Doors are rarely found;
            they house metal shelves and ventilation ducts. The pipes cause the
            heat in Level 2 to reach immense temperatures, reportedly reaching
            200 Fahrenheit (93 °C) and higher, boiling any wanderer alive. It is
            generally described as decrepitude compared to previous levels, with
            cracks in the stone surfaces and the pipes being rusted from what
            appears to be decades of neglect.
          </p>
          <p>
            Occasionally, doors can lead to small rooms that may contain
            machinery that is connected to the pipes present throughout the
            level. Random items that were left by other explorers can be found
            on the metal shelves, providing resources for wanderers. Due to the
            insalubrious conditions found in Level 2, roaches and mice are found
            in the hallways. These creatures should not be eaten without proper
            preparation under any circumstances, due to the frequency of plagues
            and bacterial infections that can be caught through the consumption
            of these mice.
          </p>
          <p>
            Some sections of Level 2 are completely devoid of light, while
            others are only lit by alternate sources of light, such as
            flashlights and lamps. A notable, musty smell can be found in areas
            where the pipes exist. This is due to the presence of multiple
            different species of mold growing on the pipe walls and floors.
            Despite the inherent humidity, water itself is scarce, with the
            exception of a few small puddles scattered throughout; though, these
            puddles should only be used as a source of water when one has no
            other supply.
          </p>
          <p>
            Level 2 is far more dangerous than Level 1, due to the hazards
            mentioned above and the sheer number of entities inhabiting the
            level. If you come into contact with a creature in this level, it is
            advised that you should run immediately, as they are incredibly
            hostile and will kill off most victims; even those who escape may
            suffer serious wounds, usually hindering their ability to progress
            forward.
          </p>
          <p>
            As one walks in this level, after a few days of traversing, the
            pipes will commonly be found with leaks; the steam being shot from
            these holes will heat up the tunnel, making it impossible for one to
            walk any further without suffering third degree burns. If one
            persists at this point, the tunnel will close behind them and they
            will be cooked alive.
          </p>
        </>
      )
    },
    entities: () => (
      <p>
        Known entities that lurk in Level 2 are Facelings, Hounds, Smilers and
        Scratchers. Additional entities likely inhabit the level, however.
      </p>
    ),
    coloniesAndOutposts: () => (
      <p>
        Due to the nature of this level, colonies and outposts are unable to be
        established.
      </p>
    ),
    inAndOuts: {
      entrances: () => (
        <p>
          One of the two the only known way to enter Level 2 is via a stairwell
          in Level 1. There, one can find an unlocked door that will lead to
          here.
        </p>
      ),
      exits: () => (
        <>
          <p>There are 2 known ways of exiting Level 2.</p>
          <ol>
            <li>An unlocked door may lead to Level 2.</li>
            <li>
              Finding a fire exit in Level 2 will transport one to Level 3,
              despite the dangers and risks.
            </li>
            <li>Entering an office-styled elevator will lead to Level 4.</li>
          </ol>
        </>
      ),
    },
  },
}

export default pipeDreams
