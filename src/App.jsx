import { useState, useEffect } from 'react'
import React from 'react'
import Form from './Components/Form'
import Navbar from './Components/Navbar'
import {supabase} from './client'
import Card from './Components/Card'
import {Link} from 'react-router-dom'


import './App.css'

function App(){
  const [data, setData] = useState([]);
  const [searcht, setSearht] = useState("");

  useEffect(() => {
    const fetchData = async () =>{
      const {data} = await supabase.from('posts').select('*');
      setData(data);
    }
    fetchData();
  }, []);
  const handleLike = async (id, currentLikes) => {
    await supabase
      .from('posts')
      .update({ likes: currentLikes + 1 })
      .eq('id', id);
   
    const { data } = await supabase.from('posts').select('*');
    setData(data);
  };

  const popular = async () => {
    const { data } = await supabase
      .from('posts')
      .select('*')
      .order('likes', { ascending: false });
    setData(data);
  };

  const newest = async () => {
    const { data } = await supabase
      .from('posts')
      .select('*')
      .order('created_at', { ascending: false });
    setData(data);
  };

  const search = async () => {
    const { data } = await supabase
      .from('posts')
      .select('*')
      .eq('title', searcht);
    setData(data);
  };


  
  return(
    <div className = "app">
      <Navbar/>
    <div className = "content">
    <h1>Welcome To Our Website</h1>
    <p>Recently landed a job or internship and looking for a roomate? Look no further. Use our app to find people working in the same area as you or the same company, and reply to their posts to get connected and house together!</p>
    </div>
    <div className = "sort">
    <button onClick = {newest}>Newest</button>
    <button onClick = {popular}>Most Liked</button>
    <input
    type = 'text'
    placeholder = 'Search'
    value = {searcht}
    onChange = {(e) => setSearht(e.target.value)}
    />
    <button type = "submit" onClick = {search}>Search</button>
    </div>
    <div className = "gallery">
      <div className = "cards">      
      {data && data.map((item) => (
  <div key={item.id} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    <Link to={`/${item.id}`}>
      <Card id={item.id} time = {item.created_at} title={item.title} area={item.area} content={item.content} likes={item.likes}/>
    </Link>
    <div className="likes">
    <button  onClick={() => handleLike(item.id, item.likes)}>👍</button>
    </div>
  </div>
))}

      </div>
    </div>
    </div>
  )
}

export default App
