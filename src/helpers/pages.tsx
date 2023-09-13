import Levels from "../components/Levels"
import Canons from "../components/Canons"
import Entities from "../components/Entities"
import Groups from "../components/Groups"
import Objects from "../components/Objects"
import Difficulties from "../components/Difficulties"

interface ITabs {
  title: string
  icon: () => JSX.Element
  content: () => JSX.Element
}

export const tabs: ITabs[] = [
  {
    title: "rules",
    icon: () => (
      <span className="material-symbols-outlined">developer_guide</span>
    ),
    content: () => <Difficulties />,
  },
  {
    title: "groups",
    icon: () => <span className="material-symbols-outlined">groups</span>,
    content: () => <Groups />,
  },
  {
    title: "canons",
    icon: () => <span className="material-symbols-outlined">verified</span>,
    content: () => <Canons />,
  },
  {
    title: "objects",
    icon: () => (
      <span className="material-symbols-outlined">deployed_code</span>
    ),
    content: () => <Objects />,
  },
  {
    title: "entities",
    icon: () => <span className="material-symbols-outlined">mystery</span>,
    content: () => <Entities />,
  },
  {
    title: "levels",
    icon: () => <span className="material-symbols-outlined">floor</span>,
    content: () => <Levels />,
  },
]
