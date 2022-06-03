import PropTypes from "prop-types"

const Sidebar = ({handleSidebarToggle, toggleSidebar})=>{   

return(
<div className="sidebar"style={{width: toggleSidebar.width}}>
<div className="sidebar-icon">
<i className="fa-solid fa-rectangle-xmark close-sidebar" onClick={handleSidebarToggle}></i>
</div>
<ul>
<li className="list_item"><a href="#header-section"> Home </a>   </li>
<li className="list_item"> <a href="#skills-section"> My services </a>  </li>
<li className="list_item"><a href="#projects-section">  My Work </a>  </li>
<li className="list_item"><a href="#personality-section">  About Me</a>   </li>
<li className="list_item"> <a href="#footer-section"> Contact Me </a>  </li>
</ul>
</div>
) 

}
Sidebar.propTypes = {
toggleSidebar: PropTypes.object.isRequired,
handleSidebarToggle: PropTypes.func.isRequired

}
export default Sidebar