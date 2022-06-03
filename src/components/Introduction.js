import raphael from  "../images/raphael.jpg"

const Introduction = ()=>{
return(
<section className="introduction-section"  id="introduction-section">
    <h2 className="introduction-heading">Hello, I am <span>Izueke Raphael</span></h2> 
<div className="introduction-title">FRONT-END-DEV</div>
<div className="introduction-img-container"><img  src={raphael} alt= "a picture of raphael"/></div>

</section>
)
}

export default Introduction