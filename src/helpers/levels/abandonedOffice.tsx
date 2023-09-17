import { ILevels } from "./levels.interface"

const abandonedOffice: ILevels = {
  title: "Abandoned Office",
  image: "assets/abandoned-office.png",
  difficulty: 8,
  content: {
    description: () => {
      return (
        <>
          <p>
            Level 4, also known as the “Abandoned Office”, is an expansive,
            empty structure, with architecture resembling a modern office
            building. Most areas of the level are entirely devoid of furniture
            and other accessories one would typically expect to find in an
            office, although darkened indents strewn about the carpeting appear
            to indicate that furniture may have been present at one point in
            time. Due to the lack of inherent dangers, environmental or
            otherwise, Level 4 is widely regarded as a “rest stop” amongst
            wanderers, a safe location for one to take a break during their
            journey. Due to this, the creation of colonies and outposts is
            highly recommended, and many sustained communities have begun and
            flourished in this level.
          </p>
          <p>
            Despite the level’s architecture suggesting the existence of
            multiple floors, descent by means of stairs has revealed the lack of
            a ground floor, and likewise, the lack of a top floor or roof. Even
            though the exploration of Level 4 is limited in this aspect,
            wanderers can access other areas within the same floor, such as
            workrooms, hallways, and smaller offices. While the main areas of
            the level are primarily devoid of furniture, the smaller workrooms
            commonly have office chairs and desks containing various items. One
            particularly notable find was a decrepit book containing the
            earliest known recording of Level Keys and The Keymaster, mentioning
            an object called "The Key of Salvation".
          </p>
          <p>
            As previously mentioned, it has been noted that Level 4 follows
            sequential weather patterns that change gradually in three-month
            intervals. The seasons recorded thus far have been referred to as
            spring, summer, fall, and winter, which present similar
            characteristics to those in the Frontrooms. Spring refers to the
            rainiest period of Level 4's weather. During this season, the
            level's temperature typically remains between 12°C - 18°C. Shortly
            afterward comes summer, typically the most intense season in Level
            4. The temperature of the level during this period is known to
            oscillate between lows of 22°C - 24°C and highs of 40°C - 42°C.
            Next, the fall season is among the most passive of the level's
            weather periods. Rain and thunderstorms are still frequent, but not
            as long-lasting as in spring, nor as intense as in summer. During
            this period, favorable conditions are created for wanderers to form
            colonies and outposts since manifestations of the rain are minimal
            and the temperature primarily remains between 10°C - 15°C. Finally,
            rather than the storms present in other seasons, the precipitation
            during the winter period freezes into snowflakes. Blizzards are a
            common event, as the temperature can drastically drop to a negative
            degree (varying from 0°C to even -10°C) during this season.
          </p>
        </>
      )
    },
    coloniesAndOutposts: () => (
      <>
        <p>
          Currently, the M.E.G. has recorded two officially documented colonies
          and outposts within Level 4:
        </p>
        <h4>B.A.S. (Backrooms Analytical Squadron)</h4>
        <ol>
          <li>
            An organization found exclusively in Level 4 with the primary
            objective of focusing on the exploration of the office’s structure,
            secrets, and connections to the Frontrooms;
          </li>
          <li>
            The group consists of skilled scientists, professionals in the
            medical field, reporters, and architects;
          </li>
          <li>
            The B.A.S. is known for their several discoveries in the Backrooms;
          </li>
          <li>
            Known for maintaining good relations with The Maintenance Workers in
            Level 3;
          </li>
          <li>
            They are friendly and open to trade with wanderers, although a lot
            of them are quite reserved and do not present a welcoming sight for
            newcomers.
          </li>
        </ol>
        <h4>
          S.R.C. (Society of the Red Cross: Natural Sciences and Medicine)
        </h4>
        <ol>
          <li>
            A medicinal and pharmaceutical organization focused primarily on
            maintaining and providing for the health of wanderers who pass by;
          </li>
          <li>
            The group has a current member count of approximately 433,
            consisting of various divisions of doctors, nurses, physicians, and
            pharmacists;
          </li>
          <li>
            It assists vulnerable wanderers in situations of disaster/crisis by
            contributing in averting and alleviating suffering in all its forms,
            protecting health and mental wellbeing, along with cultivating
            respect toward human dignity;
          </li>
          <li>
            Known to stockpile food, medical supplies and other necessary
            resources in order to help wanderers have a safe time in Level 4;
          </li>
          <li>
            They are friendly and welcoming towards anyone who enters in contact
            with them; up for trade as long as the object the wanderer trades
            can serve in healing a harmed human being.
          </li>
        </ol>
      </>
    ),
    inAndOuts: {
      entrances: () => (
        <>
          <p>There are nine currently known methods of entering Level 4:</p>
          <ol>
            <li>
              One may enter this level from Level 3 via a door labeled “office
              sector”;
            </li>
            <li>
              Entering a flatly-colored wooden door on Level 30 may lead one to
              this level;
            </li>
            <li>
              Some doors in Level 54's Floor 2 have a chance of leading to this
              level;
            </li>
            <li>
              Entering a double side door with a "No Exit" sign in Level 7 may
              lead one to this level;
            </li>
            <li>
              Entering a doctor medical office door in Level 16 may lead one to
              this level;
            </li>
            <li>
              Sewer grates on the ceiling of Level 34 may rarely lead one to
              this level through the floor;
            </li>
            <li>
              Extended hallways in Level 37 lacking any water may eventually
              lead to Level 4;
            </li>
            <li>
              Certain areas in Level 47 may seamlessly lead one to this level;
            </li>
            <li>This level may be entered via an orange door in Level 153.</li>
          </ol>
        </>
      ),
      exits: () => (
        <>
          <p>There are nine currently known methods of exiting Level 4:</p>
          <ol>
            <li>
              Coming upon an ornately-decorated door emanating disquieting
              classical music may lead to Level 5;
            </li>
            <li>
              One may enter Level 6 by chance upon the lights in the level going
              out;
            </li>
            <li>
              Forcing open a window and climbing out during a heavy thunderstorm
              may lead one to Level 11 or Level 37;
            </li>
            <li>
              Entering a room labeled "greenhouse" may lead one to Level 13;
            </li>
            <li>
              Entering a door labeled with a "rose-flower" symbol may lead one
              to Level 83 or Level 150;
            </li>
            <li>
              Entering a door labeled with an "ocean wave" symbol will lead one
              to Level 100;
            </li>
            <li>
              Disproportionately long descending staircases may lead to Level
              153;
            </li>
            <li>
              Extended metallic hallways may lead to Level 192 or Level 273;
            </li>
            <li>
              Entering a door with a brass number “6” will lead one to Level
              332.
            </li>
          </ol>
        </>
      ),
    },
  },
}

export default abandonedOffice
