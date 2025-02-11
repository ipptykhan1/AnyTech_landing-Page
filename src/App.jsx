import './app.css'
import About from './Components/About/About'
import Experience from './Components/Experience/Experience'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'


function App() {
  

  return (
    <>
       <div>
        <Navbar/>
        <About/>
        <Experience/>
        <Footer/>
       </div>
    </>
  )
}

export default App
