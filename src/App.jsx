import Header from "./components/header-swiper/Header"
import Footer from "./components/footer/Footer"
import logo from './assets/logo.jpg'
import mcafree from './assets/mcafree.svg'
import norton from './assets/norton.svg'
import './App.css'
import Form from "./components/form/Form"


function App() {

  return (
    <>
      <Header />
      <main>
        <div className="logo-icons">
          <div className="logo"><img src={logo} alt="logo clarifion" className="logo-img" /></div>
          <div className="icons">
            <div className="item"><img src={mcafree} alt="logo mc afree" /></div>
            <div className="item"><img src={norton} alt=" logo norton" /></div>
          </div>
        </div>
        <Form />
      </main>
        <Footer />
    </>
  )
}

export default App;
