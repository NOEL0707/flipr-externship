const express = require('express')
const app = express();
var cors = require('cors');
var mysql = require('mysql2');
const {noteScheme}=require('./schemas/noteSchema');
const {query}=require('./utils/sqlQueries');
const port = 4444;
const notesRoutes=require("./routes/notes");

require('dotenv').config()
app.use(cors());
app.use(express.json());
app.use("/api/notes", notesRoutes);
async function init(){
  try {
    const [row,fields]=await query(`CREATE DATABASE IF NOT EXISTS notesApp `);
    console.log('Database notesApp Created/Present');

  } catch (error) {
    throw error;
  }
  try {
    const [row,fields]=await query(`CREATE TABLE IF NOT EXISTS  notes ${noteScheme}`);
    console.log('Table notes Created/Present');
  } catch (error) {
    throw error;
  }
}
init();

app.get('/', (req, res) => {
  res.send('Home page of Notes Application site!');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})