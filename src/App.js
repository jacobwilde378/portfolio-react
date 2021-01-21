import React, { useState } from 'react'
import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Page from './components/Page'


function App() {
  const [Pages] = useState([
    {
      name: "About"
    },
    {
      name: "Portfolio"
    },
    {
      name: "Contact"
    },
    {
      name: "Resume"
    }
  ])

  const [currentPage, setCurrentPage] = useState(Pages[0])

  return (
    <>
      <Header />
      <Nav
        pages={Pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}

      ></Nav>
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
      <Footer />
    </>
  )
}

export default App;
