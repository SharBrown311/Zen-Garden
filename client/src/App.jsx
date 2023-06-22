import React from "react"
import Resume from "./assets/Resume.jsx"
import Contact from "./assets/Contact.jsx"


import {Routes, Route} from 'react-router-dom'
import "./App.css"
import Header from "./page-components/Header.jsx"
import Home from "./assets/Home.jsx"
import Footer from "./page-components/Footer.jsx"
function App() {
 
  return (
    <div className="App">
      <Header />
     <main className="main-body">
      <hr />
      <Routes>
        <Route path = "/" element = {<Home />} />
      <Route path = "/resume" element = {<Resume />} />
      <Route path = "/contact" element = {<Contact />} />
      </Routes>
     </main>
     <Footer />
    </div>
  )
}

export default App