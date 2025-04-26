import React from "react"
import {Link} from 'react-router-dom'
import './components.css'


function Card ({id, title, time , content, area, likes}) {
    return(
        <div className = "card">
            <Link to = {`/${id}/edit`}><button>Edit</button></Link>
            <p>Time: {time} </p>
            <p>Title: {title}</p>
            <p>Upvotes: {likes}</p>
            

        </div>
    )

}

export default Card;