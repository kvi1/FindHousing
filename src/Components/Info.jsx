import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import './components.css'
import { supabase } from '../client'
import { useParams, Link } from 'react-router-dom'

export default function Info() {
    const [title, setTitle] = useState("");
    const [area, setArea] = useState("");
    const [content, setContent] = useState("");
    const [likes, setLikes] = useState(0);
    const [image, setImage] = useState("");
    const [data, setData] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await supabase.from('posts').select('*').eq('id', parseInt(id)).single();
            setData(data);
            setTitle(data.title);
            setContent(data.content);
            setArea(data.area);
            setImage(data.image);  // this matches your database field
            setLikes(data.likes); 
        }
        fetchData();
    }, [id]);

    const handleDelete = async (event) => {
        event.preventDefault();
        await supabase.from('posts').delete().eq('id', id);
        alert("Your post has been deleted!");
        window.location.href = "/";
    }

    return (
        <div>
            <Navbar />
            <div className="main">
                <div className="statsMain">
                    <p>Title: {data.title}</p>
                    <p>Area: {data.area}</p>
                    <p>Content: {data.content}</p>
                    <p>Upvotes: {data.likes}</p>
                    <Link to={`/${id}/edit`}><button>Edit</button></Link>
                    <button onClick={handleDelete}>Delete</button>
                    {image && (
                        <img
                            src={image}
                            alt="Post visual"
                            style={{
                                display: 'block',
                                maxWidth: '100%',
                                height: '180px',
                                objectFit: 'cover',
                                borderRadius: '8px',
                                marginBottom: '12px',
                                background: '#eee'
                            }}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}
