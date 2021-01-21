import React from 'react'


export default function Nav(props) {
    const {
        pages =[],
        setCurrentPage,
        currentPage
    } = props

    return (
        <nav className="container">
            <div className="row justify-content-around text-center">
                {pages.map((thisPage, counter) => (
                    <div className = "col">
                        <button className={`btn btn-link ${currentPage.name === thisPage.name && 'indicator'}`}
                        key={`nav-${counter}-${thisPage.name}`} 
                        onClick={() => setCurrentPage(thisPage)}
                        >
                            {thisPage.name}
                        </button>
                    </div>
                ))}
            </div>
            
        </nav>
    )
}
