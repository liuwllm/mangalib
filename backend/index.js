import express from "express"
import mysql from "mysql"

const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"CRUDapp123!",
    database:"test"
})

app.use(express.json());

app.get("/", (req,res) => {
    res.json("Hello, this is the backend.");
})

app.get("/manga", (req,res) => {
    const q = "SELECT * FROM manga"
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
})

app.post("/manga", (req,res) => {
    const q = "INSERT INTO manga (`title`, `author`, `score`, `chapters`, `cover`) VALUES (?)"
    const values = [
        req.body.title,
        req.body.author,
        req.body.score,
        req.body.chapters,
        req.body.cover
    ]
    
    db.query(q, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json("Manga created successfully");
    })
})

app.listen(8800, ()=>{
    console.log("Connected to backend!")
})