import React from 'react'
import bioImage from '../../assets/nav/jacob.jpg'

function About() {
    return (
        <article className="card-deck">
            <div className="col">
                <div className="card">
                    <div className="card-header">
                    <h3>Jacob Wilde</h3>
                    </div>
                    <img className="card-img-top" src={bioImage} alt="Jacob Wilde wearing sunglass on top of a mountain"></img>
                    <div className="card-body">
                        
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <h4 className="card-header">Bio</h4>
                    <div className="card-body">
                        <p>
                            I was born and raised in Salt Lake City, Utah. I gradudated from the University of Utah with a BS in
                            Strategic Communication.
                            I am also working with the University of Utah's
                            Continuing Education program to become a full stack developer.
                </p>
                        <p>
                            I currently work for
                            a local credit union as the Core System Assistant Manager. I supervise the other Core System Team
                            members and focus on project management. I'm currently assisting the executive team with switching
                            our legacy core system for a more modern one.
                </p>
                        <p>
                            I also manage the credit union's Datawarehouse. This was built from scratch and is critical for
                            reports used by upper management and reports that we file with Federal Agencies.
                </p>
                    </div>

                </div>
            </div>
            <div className="col">
                <div className="card">
                    <div className="card-header">
                        <h4>Hobbies</h4>
                    </div>
                    <div className="card-body">
                        <p>
                            I like to spend my freetime learning new skills or outside taking advantage of all Utah has to
                            offer. The one thing this state is missing is an ocean beach, so I try to vacation near one when
                            possible.
                        </p>
                        <ul>
                            <li>Camping</li>
                            <li>Kayaking</li>
                            <li>Mountain Biking</li>
                            <li>Hiking</li>
                            <li>Bonfires</li>
                            <li>Spending Time with Friends/Family</li>
                        </ul>
                    </div>
                </div>

            </div>
        </article>
    )
}

export default About