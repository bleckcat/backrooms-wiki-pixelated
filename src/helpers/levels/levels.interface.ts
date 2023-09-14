export interface ILevels {
  image: string
  title: string
  difficulty: number
  content: {
    description: () => JSX.Element
    entities?: () => JSX.Element
    coloniesAndOutposts?: () => JSX.Element
    inAndOuts?: {
      entrances: () => JSX.Element
      exits: () => JSX.Element
    }
  }
}
