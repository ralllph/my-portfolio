import rafiki from "../images/rafiki.jpg"

const Personality = ()=>{
return(
<section className="personality-section" id = "personality-section">
<h2 className="personality-header">Who I am</h2>

<div className="personality-location">{"Designer & Developer based  in Nigeria"}</div>

<div className="personality-description"> 
<div>  
<p>
A Front End Developer with passion for coding, sports and brain tasking challenges. 
Generally love solving brain tasking challenges which also motivated me to code.
Born and brought up in Nigeria, completed my computer science degree at Babcock university located in ogun state.
Picked an interest in web development and pursued the interest with a year of internship.
</p>
</div>

<div> 
<p>
A sports lover, soccer especially. Love to travel,explore new places and meet new people. Funny by nature. 
</p>
</div>

</div>

<div className="personality-img-container"> <img src ={rafiki} alt = "raphael"/> </div> 




</section>
)   
}

export default Personality