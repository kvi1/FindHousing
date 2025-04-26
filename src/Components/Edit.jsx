import React from 'react'
import { useState, useEffect } from 'react'
import './components.css'
import {supabase} from '../client'
import { useParams } from 'react-router-dom';
import Navbar from './Navbar'


export default function Edit() {
    const [title, setTitle] = useState("");
    const [area, setArea] = useState("");
    const [content, setContent] = useState("");
    const [data, setData] = useState({});
    const [image, setImage] = useState("");
    const {id} = useParams();

    const handleDelete = async (event) => {
        event.preventDefault();
        await supabase.from('posts').delete().eq('id', id);
        alert("Your post has been deleted!");
        window.location.href = "/";
    }
    


    const handleClick = async (event) => {
        event.preventDefault();
      
        await supabase
          .from('posts')
          .update({title: title, area: area, content: content, image: image})
          .eq('id', id);
      
        alert("Your post has been updated!");
        window.location = "/";

      }

    
        useEffect(() => {
            const fetchData = async () =>{
                const {data} = await supabase.from('posts').select('*').eq('id', id).single();
                setData(data);
                setTitle(data.title);
                setArea(data.area);
                setContent(data.content);   
        }
        fetchData();
    }, [id])

    



  return (
    <div>
     
        <Navbar/>
  
        <div className = "delete">
        <button onClick = {handleDelete}>Delete</button>
        </div>
        <div className = "main">
              <h1> Edit Your Post</h1>
              <div className = "formedit">
              <p>Title</p>
                <input
                    type="text"
                    placeholder="Name"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <p>Area</p>
                <input
                    type="text"
                    placeholder="Area"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                />
      <p>Nickname</p>
                <input
                    type="text"
                    placeholder="Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />

<p>Image</p>
                <input
                    type="text"
                    placeholder="Image"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
              </div>
              <div className = "editbuttons">
              
              <button onClick = {handleClick}>Submit</button>
             
              </div>
           
        </div>
      
    </div>
  )
}