import './resume.css';

function Resume() {
    let front = ["HTML", "CSS", "JavaScript", "JQuery", "Responsive Design", "React"]
    let back = ["Node", "Express", "MySQL", "Sequelize", "MongoDB", "Mongoose", "RESTful APIs", "GraphQL APIs"]
    return (
        <div className="resume">
            <h2>Resume</h2>
            <br />
            <br />
            <p>You can download my resume <a target="_blank" href="./resume.pdf">here</a>.</p>
            <br />
            <h3>Front-end Proficiencies</h3>
            <ul>
                {front.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            <br />
            <h3>Back-end Proficiencies</h3>
            <ul>
                {back.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
        </div>
    )
}

export default Resume;