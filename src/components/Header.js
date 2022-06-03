import { useState } from "react"
import Sidebar from "./Sidebar"

const Header  = ()=>{
const [toggleSidebar, setToggleSidebar] = useState(
{
    state: false,
    width: "0"
}
)

const handleSidebarToggle = ()=>{
setToggleSidebar(
    (prevState)=>{
        return {
            state:!prevState.state,
            width: prevState.width=== "0" ? "40%": "0"
        }
    }
)
}
return(
<header id="header-section">
{ /*  Nav Bar   */}
<nav>
    <h3 className="logo-name">{`<devraph>`} </h3>
    <i className="ri-menu-line menu" onClick={handleSidebarToggle}></i>
</nav>
{ /* side bar*/ }
<Sidebar  handleSidebarToggle={handleSidebarToggle} toggleSidebar={toggleSidebar} />
</header>
)
}

export default Header