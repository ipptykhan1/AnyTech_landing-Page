import './app.css'
import About from './Components/About/About'
import Experience from './Components/Experience/Experience'
import Finance from './Components/Finance/Finance'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import Redefine from './Components/Redefine/Redefine'


function App() {
  

  return (
    <>
       <div>
        <Navbar/>
        <Redefine/>
        <Finance/>
        <About/>
        <Experience/>
        <Footer/>
       </div>
    </>
  )
}

export default App
