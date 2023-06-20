import React from "react"
import Resume from "./assets/Resume"
import Contact from "./assets/Contact"


import {Routes, Route, Link} from 'react-router-dom'
import "./App.css"
import Header from "./page-components/Header"
import Home from "./assets/Home"
import Footer from "./page-components/Footer"
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