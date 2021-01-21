import React from 'react'

function Resume() {
    return (
        <article className="card-deck">
            <div className="col">
                <div className="card">
                    <div className="card-header">
                        <h3>Front End</h3>
                    </div>
                    <div className="card-body">
                        <ul>
                            <li>HTML</li>
                            <li>Css</li>
                            <li>JavaScript</li>
                            <li>jQuery</li>
                            <li>Bootstrap</li>
                            <li>Handlebars</li>
                            <li>React</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <div className="card-header">
                        <h3>Back End</h3>
                    </div>
                    <div className="card-body">
                        <ul>
                            <li>Node</li>
                            <li>Express</li>
                            <li>APIs</li>
                            <li>Sequelize (MYSQL)</li>
                            <li>Mongoose (MongoDB)</li>
                            <li>REST</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <div className="card-header">
                        <h3>Banking Industry</h3>
                    </div>
                    <div className="card-body">
                        <ul>
                            <li>Datawarehousing</li>
                            <li>Fusion UltraData Platform</li>
                            <li>Corelation Keyston Platform</li>
                            <li>SQL Report Writing</li>
                            <li>UniData Report Writing</li>
                            <li>UniBasic Programming</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <div className="card-header">
                        <h3>General IT</h3>
                    </div>
                    <div className="card-body">
                        <ul>
                            <li>Project Management</li>
                            <li>Excel VBA</li>
                            <li>Excel Advanced Functions</li>
                            <li>Microsoft Office</li>
                            <li>AIX Power Systems</li>
                            <li>Help Desk Support</li>
                        </ul>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Resume