interface IColoniesAndOutposts {
  title: string
  aspects: Array<string>
}

export interface ILevels {
  image: string
  title: string
  difficulty: number
  content: {
    description: () => JSX.Element
    entities?: string
    coloniesAndOutposts?: Array<IColoniesAndOutposts>
    inAndOuts?: {
      entrances: { description?: string; infoList?: string | Array<string> }
      exits: { description?: string; infoList?: string | Array<string> }
    }
  }
}
