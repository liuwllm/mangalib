import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";

const Manga = () => {
    const [manga, setManga] = useState([])

    useEffect(()=>{
        const fetchAllManga = async () => {
            try {
                const res = await axios.get("http://localhost:8800/manga")
                setManga(res.data);
            } catch (err) {
                console.log(err)
            }
        }
        fetchAllManga()
    },[])

    return (
        <div>
            <h1>Library</h1>
            <div className="manga">
                {manga.map((manga) => (
                    <div className="entry" key={manga.id}>
                        {manga.cover && <img src={manga.cover} alt=""/>}
                        <h2>{manga.title} <span className="score">{manga.score}/5</span></h2>
                        <p>{manga.author}</p>
                        <p>Chapters read: {manga.chapters}</p>
                    </div>
                ))}
            </div>
            <button>
                <Link to="/add">Add new manga title</Link>
            </button>
        </div>
    )
}

export default Manga