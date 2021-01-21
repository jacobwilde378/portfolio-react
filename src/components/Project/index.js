import React from 'react'
import images from '../../../src/assets/projects/burn-book.jpg'

function Project({ project }) {
    // const project = thisProject
    const { name, image, alt, repo, link, description } = project;
    console.log(image)
    let imgPath = `../../assets/projects/${image}`
    console.log(imgPath)
    return (
        <div className="">
            <div className="card-header" key={name}>
                <h3>{name}</h3>
            </div>
            <div>
            <img 
            src={images}
            alt={alt}
            className="card-image"
            />
            </div>
            
            <div className="card-body">
                <p>{description}</p>
                <div>
                    <a href={repo} target="_blank" rel="noreferrer">Github Repo</a>
                </div>
                <div>
                    <a href={link} target="_blank" rel="noreferrer">Deployed Site</a>
                </div>
            </div>
        </div>
    )
}

export default Project