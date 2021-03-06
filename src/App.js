import "./styles.css"
import Header from "./components/Header"
import Introduction from "./components/Introduction"
import Skills from "./components/Skills"
import Personality from "./components/Personality"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import {Routes, Route} from "react-router-dom"

const  App=() =>{
{/* my app component*/}
return (
<div className="App">
    {/* subcomponents */}
<Header />
<Introduction />
<Skills />
<Personality />
<Projects />
<Footer />

</div>
);

}

export default App;
