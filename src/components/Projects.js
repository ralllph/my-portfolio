import project1 from "../images/project1.png"
import project2 from "../images/project2.png"
import project3 from "../images/project3.png"
import project4 from "../images/project4.png"


const Projects =  ()=>{
return(
<section className="Projects-section"   id="projects-section">
<h2>My Work</h2>
<h4 className="projects-header">A selection of my range of work</h4>
<div className="projects-list">  
<div className="project-img-container"><img src={project1} alt =""/></div>
<div className="project-img-container"><img src={project2} alt =""/></div>
<div className="project-img-container"><img src={project3} alt =""/></div>
<div className="project-img-container"><img src={project4} alt =""/>  </div>
</div>
</section>
)
}
export default Projects