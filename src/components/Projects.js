import project1 from "../images/project1.png"
import project2 from "../images/project2.png"

const Projects =  ()=>{
return(
<section className="Projects-section"   id="projects-section">
<h2>My Work</h2>
<h4 className="projects-header">A selection of my range of work</h4>
<div className="projects-list">  
<div className="project-img-container">
    <a href="https://stunning-cranachan-a9249a.netlify.app" target= "_blank"><img src={project1} alt =""/></a>
</div>
<div className="project-img-container"><a href="https://candid-churros-ecf1e7.netlify.app" target="_blank"><img src={project2} alt =""/></a></div>
</div>
</section>
)
}
export default Projects