import React, { useState } from 'react'
import Project from '../Project'

function Portfolio() {

    const [projects] = useState([
        {
            name: 'Ambitious Alcoholics',
            description: 'This application will allow you to search for drink recipes.  It will also return the Wikipedia section about the primary alchol that is used.',
            link: 'https://jacobwilde378.github.io/ambitious-alcoholics/',
            repo: 'https://github.com/jacobwilde378/ambitious-alcoholics',
            image: 'burn-book.jpg',
            alt: 'The burn book from mean girls'
        },
        {
            name: 'Weather App',
            description: 'This application works with an weather API to show current weather conditions based on the users search criteria.',
            link: 'https://jacobwilde378.github.io/weather-app/',
            repo: 'https://github.com/jacobwilde378/weather-app',
            image: 'weather.jpg',
            alt: 'line drawing of clouds'
        },
        {
            name: 'Burn Book',
            description: 'This application is a tribute to the movie Mean Girls.  It behaves like a social media site where users can add thoughts and reactions to others thoughts.  Users are also able to add and remove fiends.',
            link: 'https://drive.google.com/file/d/1sA8CRUCOMU6B82Chsy5dBn37TrMW8-Oe/view',
            repo: 'https://github.com/jacobwilde378/burn-book',
            image: 'burn-book.jpg',
            alt: 'The burn book from mean girls'
        },
        {
            name: 'Employee Tracker',
            description: 'This CLI tool is designed to work as a mini HR system.  You can track users, roles, and departments.  A user is also able to pull summary reports on the users, roles, and departments ',
            link: 'https://drive.google.com/file/d/12NV1Qje85K4vjnjbthOijj45du77oI23/view',
            repo: 'https://github.com/jacobwilde378/tracker-employee',
            image: 'employee-tracker.jpg',
            alt: 'Graphic image of Neck Tie and compass'
        },
        {
            name: 'Password Generator',
            description: 'This program will generate a secure password according to what settings you choose.',
            link: 'https://jacobwilde378.github.io/PasswordProgram/',
            repo: 'https://github.com/jacobwilde378/PasswordProgram',
            image: 'password.jpg',
            alt: 'Lock with password replaced with * over random character background'
        },
        {
            name: 'DinoStore',
            description: 'This is a dinosaur themed ecommerce store.',
            link: 'no live URL yet',
            repo: 'waiting to fork',
            image: 'dinstore.jpg',
            alt: 'outline of dinosaur again black background.'
        },
    ])

    return (
        <div className="container">
            <div className="card-deck">
                {projects.map((project, idx) => (
                        <div className="card text-center">
                        <Project
                            project={project}
                            key={"project" + idx}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Portfolio