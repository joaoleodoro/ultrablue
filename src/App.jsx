import Header from "./components/header"
import Frase from "./sections/Frase"
import Bonus from "./sections/Bonus"
import Cartaoideal from "./sections/Cartaoideal"
import Experiencias from "./sections/experiencias"
import Herosection from "./sections/herosection"
import Ultrablue from "./sections/ultrablue"
import Terminal from "./sections/terminal"


function App() {

  return (
    <>
      <Header />
      <Herosection />
      <Ultrablue />
      <Cartaoideal />
      <Frase />
      <Bonus />
      <Experiencias />
      <Terminal />
    </>
  )
}

export default App
