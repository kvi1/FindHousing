import react from 'react';
import {Link} from 'react-router-dom'
import './components.css'


function Navbar(){
    return(
        <div className = "navbar">
            <h1>FindHousing🏠</h1>
            <ul>
                <Link to = "/"><li>Home</li></Link>
                <Link to = "/form"><li>Create Post</li></Link>
            </ul>
        </div>
    )
}

export default Navbar;