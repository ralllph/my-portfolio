
const Skills = ()=>{
return (
<section className="skills-section" >
<h2 className="skills-header">What I do</h2>

<span className="skills-line-design"  id="skills-section"></span>

<div className="skills-headline" >  
<h4 >Design + Development</h4>
<p>I design and develop fully responsive and interactive modern day websites and web applications.
Bringing concepts and designs to life with great user experience  while maintining best practices remains my top priority.
</p>
</div>

{/* Showcasing  skills */ }
<div className="skills-subsection"> 
<div className="skills-subheading"> 
<h4 >{" HTML & CSS"}</h4> 
<p>
I have a strong understanding of markup and styling using HTMl and css which are the basic 
requirements for building  websites. Strongly grounded in these concepts as I have built several applications using these skills.
</p>
</div>

<div className="skills-subheading"> 
<h4 >JavaScript</h4>
<p>I have great knowledge of javascript which is also required for making interactive web applications. 
Also having built several apps and taking on coding challenges that strengthen javascript concepts and understanding,  the skill is part of my core strengths.
</p>
</div>

<div className="skills-subheading"> 
<h4 >React js</h4>
<p> 
I undestand and work with react library using the librarie/s concepts and functionality to build complex applications.
Projects I built are based on react library as I have good experience working  with the library.  
</p>
</div>

</div>

<a className="my-work-a" href="https://scrimba.com/certificate/ukvgvVfq/gfrontend" target="_blank" rel="noreferrer" >See my certification</a>


</section>
)
}

export default Skills