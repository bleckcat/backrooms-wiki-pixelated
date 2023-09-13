interface IDifficulties {
  title: string
  aspects: Array<string>
  content: string
}

export const difficulties: IDifficulties[] = [
  {
    title: "Class 0",
    aspects: ["Safe", "Stable", "Devoid of Entities"],
    content:
      "This survival difficulty is meant for levels that are regarded as completely safe, with no entities or environmental hazards posed by the level whatsoever. One can expect to have an easy journey through a level with this difficulty, with no real dangers or threats along the way.",
  },
  {
    title: "Class 1",
    aspects: ["Safe", "Stable", "Minimal Entity Count"],
    content:
      "A level with this survival difficulty is regarded as mostly safe, with a few threats present. These threats can range from a minimal number of entities to the layout of a level being slightly difficult to survive in. Similar to Class 0, one should expect a relatively easy journey when traveling through levels with this difficulty.",
  },
  {
    title: "Class 2",
    aspects: ["Unsafe", "Stable", "Low Entity Count"],
    content:
      "Levels reaching this difficulty begin to be unsafe for a Wanderer to pass through, as various threats are present, such as entities or environmental hazards. One should expect a hard time exploring this level, and should come prepared with the necessary supplies.",
  },
  {
    title: "Class 3",
    aspects: ["Unsafe", "Unstable", "Moderate Entity Count"],
    content:
      "Levels at this difficulty and higher begin to be genuinely dangerous for one to travel in. The term 'Unsecure' is applied, meaning that a level is less well-mapped than others, has less information known about its overall layout, and that reality may be warped or altered within. One can expect multiple threats in a level with this difficulty, as there are various entities and/or hazards present. Proper supplies are always necessary in levels marked Class 3 and higher.",
  },
  {
    title: "Class 4",
    aspects: ["Unsafe", "Unstable", "High Entity Count"],
    content:
      "Levels at this difficulty pose a serious challenge for survival. One should outright avoid levels marked Class 4 and higher, as they pose large threats to Wanderers. One can expect numerous entities and hazards in levels with this difficulty, and if the level is to be explored, proper supplies and weapons are certainly required for safety.",
  },
  {
    title: "Class 5",
    aspects: ["Unsafe", "Unstable", "Entity Infestation"],
    content:
      "Levels marked with this survival difficulty are to be avoided at all costs. These levels pose extreme threats to any who explore them, as one will certainly come into serious danger. It can be expected that one will not survive in these levels at all without the proper equipment, weapons, and supplies. Class 5 also serves as the final of the 'standard' survival difficulties.",
  },
  {
    title: "Class Undetermined",
    aspects: [
      "Mysterious Properties",
      "Unknown Information",
      "Undocumented Entities",
    ],
    content:
      "This survival difficulty is meant for levels that have not been explored enough to attain the necessary information required to document them. These levels are usually very mysterious, with most information regarding them being unknown or undetermined. It is recommended to err on the side of caution by avoiding these levels, as unknown hazards may be present and unaccounted for.",
  },
  {
    title: "Class Variable",
    aspects: ["Varying Safety", "Heavily Unstable", "Diverse Entity Count"],
    content:
      "This survival difficulty is meant for levels with multiple areas of differing safety, with some being notably dangerous, and others being safer. One singular survival difficulty would not work to define a level of this nature, so a class of 'Variable' is necessary.",
  },
  {
    title: "Class Habitable",
    aspects: ["Safe", "Sustained Communities", "Devoid of Harmful Entities"],
    content:
      "This survival difficulty is meant for levels that are considerably safe and stable. Habitable levels are free from environmental hazards and hostile entities, and typically possess ample resources to support long-term habitation.",
  },
  {
    title: "Class Deadzone",
    aspects: [
      "Numerous Hazards",
      "Strictly Uninhabitable",
      "Presence of Lethal Entities",
    ],
    content:
      "Levels with this difficulty pose the ultimate threat in the Backrooms. One should not even consider exploring these levels, as whatever possibilities lay in them are certainly not worth the excessive risks to one's survival. Even with the proper equipment, one may only survive based on sheer luck, as countless entities and hazards are present. Avoid these levels at all costs.",
  },
]
