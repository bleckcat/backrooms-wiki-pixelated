import { ILevels } from "./levels.interface"

const theLobby: ILevels = {
  title: "The Lobby",
  image: "assets/the-lobby.png",
  difficulty: 0,
  content: {
    description: () => {
      return (
        <>
          <p>
            Level 0 is an expansive non-Euclidean space, resembling the back
            rooms of a commercial building. All rooms in Level 0 share the same
            superficial features, such as worn mono-yellow wallpaper, old moist
            carpet, scattered electrical outlets, and inconsistently-placed
            fluorescent lighting. Aside from these common features, no two rooms
            within the level are identical in layout.
          </p>
          <p>
            The fluorescent lighting in Level 0 hums at a constant frequency.
            This buzzing is notably louder and more obtrusive than ordinary
            fluorescent lights, and examination of the fixtures to determine the
            source has proven inconclusive. Additionally, the fluid saturating
            the carpet cannot be consistently identified; it is not water, nor
            should it be consumed.
          </p>
          <p>
            Linear space in Level 0 is altered drastically; it is possible to
            walk in a straight line, return to the starting point, and end up in
            a completely different set of rooms than the ones previously
            traversed. Due to this phenomenon, and the visual similarity between
            each room, consistent navigation of Level 0 has proven very
            difficult. Devices such as GPS locators and compasses fail to
            function within the level, and radio communications are audibly
            distorted and often prove unreliable.
          </p>
          <p>
            Above the ceiling tiles in Level 0 lies a cramped, dark space,
            roughly one meter in height. The air in this area is stale and thick
            with dust, making it difficult to breathe, and electrical wires line
            the ceiling in all directions. Attempting to use this space as a
            means of navigation is impractical, as the ceiling tiles easily give
            way under pressure. The most prominent threat in Level 0 is the
            stark lack of available resources; as the fluid saturating the
            carpet has been deemed unsafe for human consumption, most are likely
            to perish before managing to find an exit due to extended
            dehydration, starvation, and exhaustion.
          </p>
        </>
      )
    },
    entities: () => (
      <p>
        As reports are inconsistent and difficult to verify, it is unknown
        whether entities exist within Level 0. In addition, no interactions with
        other wanderers have ever been reported during explorations, as the
        individual wanderer is isolated at all times.
      </p>
    ),
    inAndOuts: {
      entrances: () => (
        <p>
          Level 0, and by extension, the Backrooms, can be accessed by
          accidentally noclipping out-of-bounds in normal reality. In addition,
          many levels can lead one to Level 0.
        </p>
      ),
      exits: () => (
        <>
          <h4>There are five currently known methods of exiting Level 0.</h4>
          <ol>
            <li>
              A variety of factors will eventually cause the hallways to fade
              into Level 1.
            </li>
            <li>Breaking a wall will lead one to Level -1.</li>
            <li>
              Breaking through the floor may lead to Level 27. It may also lead
              out into The Void.
            </li>
            <li>
              Rarely, wandering far enough in any direction may lead one to the
              Manila Room.
            </li>
            <li>
              One may occasionally find doorways constructed out of glass. These
              doors lead to Level 13.
            </li>
          </ol>
        </>
      ),
    },
  },
}

export default theLobby
