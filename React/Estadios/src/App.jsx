import './App.css'
import Navbar from './components/navbar.jsx'
import Footer from './components/footer.jsx'
import { ComentariosProvider } from './components/comentarioscontext';


function App() {

  return (
    <>
      <ComentariosProvider>
        <Navbar />
        <Footer />
      </ComentariosProvider>
    </>
  )
}

export default App
