import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Add = () => {
    const [manga, setManga] = useState({
        title: "",
        author: "",
        chapters: null,
        score: null,
        cover: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setManga((prev) => ({ ...prev, [e.target.name]: e.target.value}));
    }

    const handleClick = async e => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:8800/manga", manga)
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    }

    console.log(manga);

    return (
        <div className='form'>
            <h1>Add new manga title:</h1>
            <input 
                type="text" 
                placeholder='title' 
                onChange={handleChange} 
                name="title"/>
            <input 
                type="text" 
                placeholder='author' 
                onChange={handleChange} 
                name="author"/>
            <input 
                type="number" 
                placeholder='chapters' 
                onChange={handleChange} 
                name="chapters"/>
            <input 
                type="number" 
                placeholder='score' 
                onChange={handleChange} 
                name="score"/>
            <input 
                type="text" 
                placeholder='cover' 
                onChange={handleChange} 
                name="cover"/>
            <button onClick={handleClick}>Add</button>
        </div>
    )
}

export default Add