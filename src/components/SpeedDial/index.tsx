import React, { useState } from "react"
import "./speedDial.css"
import { tabs } from "../../helpers/pages"

interface ISpeedDial {
  setContent: React.Dispatch<React.SetStateAction<number>>
}

interface ISpeeDialButton {
  children: React.ReactNode
  title: string
  contentId: number
}

export default function SpeedDial({ setContent }: ISpeedDial) {
  const [openSpeedDial, setOpenSpeedDial] = useState<boolean>(false)

  const handleToggleSpeedDial = () => {
    setOpenSpeedDial(!openSpeedDial)
  }

  const SpeedDialButton = ({ contentId, children, title }: ISpeeDialButton) => (
    <button
      title={title}
      className={openSpeedDial ? "show-button" : "hide-button"}
      type="button"
      onClick={() => {
        handleToggleSpeedDial()
        return setContent(contentId)
      }}
    >
      {children}
    </button>
  )

  return (
    <div className="speedDial-container">
      {tabs.map((tab, index) => (
        <SpeedDialButton
          contentId={index}
          title={tab.title}
          key={`speed-dial-button-${index}`}
        >
          {tab.icon()}
        </SpeedDialButton>
      ))}
      <button type="button" onClick={() => handleToggleSpeedDial()}>
        <span className="material-symbols-outlined">more_vert</span>
      </button>
    </div>
  )
}
