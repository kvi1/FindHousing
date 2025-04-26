import React from 'react'
import {supabase} from '../client'
import Navbar from './Navbar'
import {useState} from 'react'
import './components.css'
function Form(){
    const [title, setTitle] = useState('');
    const [area, setArea] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState('');
   
    const handleClick = async (event) => {
        event.preventDefault();
        const { data, error } = await supabase
          .from('posts')
          .insert([{ title, area, content, likes: 0, image }])
          .select();
    
        if (error) {
            console.log(error);
            alert("Error creating post: " + error.message);
            return;
        }
    
        alert("Your Post Has Been Created!");
        window.location.href = '/';
    };

      
    

    return(
        <div>
        <Navbar/>

        <form className = "form">
            <p>Title</p>
            <input 
            type = "text"
            value = {title}
            placeholder = "Title"
            onChange = {(e) => setTitle(e.target.value)}/>
             <p>Area</p>
            <input 
            type = "text"
            value = {area}
            placeholder = "Area"
            onChange = {(e) => setArea(e.target.value)}/>
             <p>Content</p>
            <input 
            type = "text"
            value = {content}
            placeholder = "Content"
            onChange = {(e) => setContent(e.target.value)}/>
            <p>Image URL</p>
            <input 
            type = "text"
            value = {image}
            placeholder = "Image (Optional)"
            onChange = {(e) => setImage(e.target.value)}/>

            <button type = "submit" onClick = {handleClick}>Submit</button>

        </form>
        </div>
    )
}

export default Form;