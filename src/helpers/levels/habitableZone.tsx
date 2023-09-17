import { ILevels } from "./levels.interface"

const habitableZone: ILevels = {
  title: "Habitable Zone",
  image: "assets/habitable-zone.png",
  difficulty: 1,
  content: {
    description: () => {
      return (
        <>
          <p>
            Level 1 is a massive warehouse with concrete floors and walls,
            exposed rebar, dim fluorescent lights placed on the walls, and a
            low-hanging fog with no discernible source. The fog often coalesces
            into condensation, forming puddles on the floor in inconsistent
            areas. Unlike Level 0, this level possesses a consistent supply of
            water and electricity, which allows indefinite habitation by
            wanderers providing that appropriate precautions are taken. It is
            also far more expansive, possessing staircases, elevators, isolated
            rooms, and hallways.
          </p>
          <p>
            The fluorescent lights at any time can flicker and turn off for
            minutes or even hours. When this occurs, hostile entities may
            appear, and supplies may even vanish inexplicably. These entities
            rarely attack in groups, tend to avoid light, and large gatherings
            of people. If the lights turn off, it is strongly advised to try and
            navigate more carefully by avoiding any strange noises and find
            secure rooms to seek shelter in. It is also recommended to bring a
            light source if this occurs.
          </p>
          <p>
            Crates of supplies appear and disappear randomly within the level,
            often containing a mixture of vital items (e.g. food, Almond Water,
            batteries, tarps, weaponry, clothing, and medical supplies) as well
            as nonsensical objects such as assorted car parts, boxes of crayons,
            used syringes, partially burned paper, live mice, mice in a
            catatonic state that have been injected with unknown substances,
            shoelaces, loose change, and bundles of human hair. Consequently,
            these crates should be approached with caution due to their
            contents' unpredictability, but they can contain valuable resources.
          </p>
          <p>
            In addition, crude paintings and drawings with no apparent origin or
            meaning appear on the walls and floors. They are also known to
            change in appearance and disappear when not in direct line of sight
            or when unlit, since light fixtures in Level 1 are prone to flicker
            and fail at inconsistent intervals, as aforementioned.
          </p>
        </>
      )
    },
    entities: () => (
      <p>
        Numerous entities lurk in Level 1, especially in dark areas. Known
        entities on Level 1 include adult Facelings, Hounds, Skin-Stealers, and
        Scratchers.
      </p>
    ),
    coloniesAndOutposts: () => (
      <>
        <h4>The Raiders</h4>
        <ol>
          <li>
            Recently discovered group, with a expected number of 68 members;
          </li>
          <li>
            They are mostly friendly with regular travelers and are willing to
            trade, but will shoot down members of certain groups;", "Currently,
            they're not very strong;
          </li>
          <li>
            Apparently, their main objective is to eradicate every big group in
            the backrooms, claiming that adding corruption or politics into the
            backrooms would make it a even worse place. They plan to get bigger
            and bigger by stealing and taking over colonies and outposts.
          </li>
        </ol>
        <h4>Base Flickers of the Backroom Colonists</h4>
        <ol>
          <li>Relatively a small base.</li>
          <li>Owned by the main group.</li>
          <li>Friendly and open to trade.</li>
          <li>
            Population ranging from 25 to 200, depending on the number of people
            stationed there.
          </li>
          <li>Usually used for fandom or reddit posts by people there.</li>
          <li>Has internet access.</li>
          <li>
            Often interacts with other outposts or bases in the level (mainly
            The Republic of Level 153 and The Orderly Republic).
          </li>
        </ol>
        <h4>Republic of Level 153</h4>
        <ol>
          <li>Outpost of the Republic of Level 153. Has around 40 members.</li>
          <li>Takes in survivors.</li>
          <li>Existed since the creation of the Republic of Level 153.</li>
          <li>Has bounties on certain entities.</li>
          <li>Has around 60 guns and 3 machine guns.</li>
        </ol>
      </>
    ),
    inAndOuts: {
      entrances: () => (
        <ol>
          <li>
            Opening ordinary doors in many levels has a small chance of leading
            to the level.
          </li>
          <li>One is able to enter this level from Level 0.</li>
          <li>Noclip in Level 1.5 to enter this level.</li>
          <li>
            Unstable flooring in Level 13 indicated by visible, odd textures the
            floor possesses may lead to this level if one can noclip through it.
          </li>
        </ol>
      ),
      exits: () => (
        <>
          <h4>
            One can exit Level 1 by simply continuing to explore the Backrooms.
            Level 1 usually leads to Level 2 or back to Level 0. Other methods
            of exiting the level are as follows:
          </h4>
          <ol>
            <li>An unlocked door may lead to Level 2.</li>
            <li>
              The Hub can be accessed from this level by following a certain
              sequence of turns. If the sequence is completed incorrectly, like
              taking the wrong turn or not doubling back, one may end up
              somewhere completely random.
            </li>
            <li>
              Noclipping through walls that have outlets may lead to Level 188.
            </li>
          </ol>
        </>
      ),
    },
  },
}

export default habitableZone
