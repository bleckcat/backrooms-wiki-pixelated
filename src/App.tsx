import { useState } from "react"
import Header from "./components/Header"
import SpeedDial from "./components/SpeedDial"
import { tabs } from "./helpers/pages"

function App() {
  const [changeContent, setChangeContent] = useState<number>(5)

  return (
    <>
      <Header />
      <main>{tabs[changeContent].content()}</main>
      <SpeedDial setContent={setChangeContent} />
    </>
  )
}

export default App
