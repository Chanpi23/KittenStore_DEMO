import {Routes, Route} from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { About } from "./pages/About"
<<<<<<< HEAD
import {Navbar} from "./components/Navbar"
=======
>>>>>>> 69afa614c587d29d1361bc7ba368488ffb7ee6f8


function App() {
  return (
<<<<<<< HEAD
  <>
  <Navbar />
=======
>>>>>>> 69afa614c587d29d1361bc7ba368488ffb7ee6f8
  <Container className="mb-4">
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/store" element={<Store />}/>
      <Route path="/about" element={<About />}/>
    </Routes>
  </Container>
<<<<<<< HEAD
  </>
=======
>>>>>>> 69afa614c587d29d1361bc7ba368488ffb7ee6f8
  )
}

export default App