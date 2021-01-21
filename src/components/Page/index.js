import React from 'react'
import Content from '../Content'
import About from '../About'
import Portfolio from '../Portfolio'
import Contact from '../Contact'
import Resume from '../Resume'

function Page({currentPage}) {
  const displayPage = () => {
      switch(currentPage.name) {
          case 'About':
              return <About />
          case 'Portfolio':
              return <Portfolio />
          case 'Contact':
            return <Contact />
          case 'Resume':
              return <Resume />
          default:
              return <Portfolio />
      }
  }

  return (
    <div>
        <h3>{currentPage.name}</h3>
        <Content>{ displayPage() }</Content>
    </div>
  )
    
}
export default Page