const router = require("express").Router();
const {query}=require('../utils/sqlQueries');
/*
    End Point:localhost:4444/api/notes/create
    Request Body Format:
    {
        "title":"title of note"
        "content":'content of note
    }
    Response:
    if succeeds {"result":Note Created with Id createdID}
    else {"result":"Error While Creating"}
*/
router.post("/create", async(req, res) => {    
    try {
        let note = {
            title: req.body.title,
            content: req.body.content
        };
        const [rows,fields]=await query( `INSERT INTO notes(title,content) VALUES ("${note.title}","${note.content}")`);
        console.log('Note created with ID:', rows.insertId);
        res.status(200).send({"result":`Note Created with Id ${rows.insertId}`});
    } catch (error) {
        res.status(500).send({"result":"Error While Creating"});
        throw error;
    }
});
/*
    End Point(get):localhost:4444/api/notes/:noteid
    :note id is the id of note you want
    Request Body Format: -
    Response:
    if succeeds {
        "result": [
            {
                "id": 5,
                "title": "one_edit",
                "content": "don't know_edit",
                "created_at": "2023-04-17T07:53:57.000Z",
                "updated_at": "2023-04-17T08:16:53.000Z"
            }
        ]
    }
    else {"result":"Error While getting the notes"}
*/
router.get("/:noteId", async(req, res) => {
    let noteId=req.params.noteId;    
    try {
        const [rows,fields]=await query( `SELECT * from notes where id=${noteId}`);
        res.status(200).send({"result":rows});
    } catch (error) {
        res.status(500).send({"result":"Error While getting the notes"});
        throw error;
    }
});
/*
    End Point:localhost:4444/api/notes/edit/:noteid
    :note id is the id of note you want
    Request Body Format:     
    {
        "title":"title of note"
        "content":'content of note
    }
    Response:
    if succeeds {"result":` Edited Note with ID ${noteId}`}
    else {"result":"Error While Editing"}
*/
router.post("/edit/:noteId", async(req, res) => {
    let noteId=req.params.noteId;    
    try {
        let note = {
            title: req.body.title,
            content: req.body.content
        };
        const [rows,fields]=await query(`UPDATE notes SET title = "${note.title}" , content="${note.content}",updated_at = NOW() WHERE id=${noteId}`);
        res.status(200).send({"result":` Edited Note with ID ${noteId} if present`});
    } catch (error) {
        res.status(500).send({"result":"Error While Editing"});
        throw error;
    }
});
/*
    End Point(delete):localhost:4444/api/notes/:noteid
    :note id is the id of note you want to delete
    Request Body Format:-     
    Response:
    if succeeds {"result":` Deleted Note with ID ${noteId}`}
    else {"result":"Error While Deleting"}
*/
router.delete("/:noteId", async(req, res) => {
    let noteId=req.params.noteId;
    try {
        const [rows,fields]=await query(`DELETE FROM notes WHERE id=${noteId}`);
        res.status(200).send({"result":` Deleted Note with ID ${noteId}`});
    } catch (error) {
        res.status(500).send({"result":"Error While Deleting"});
        throw error;
    }
});
module.exports = router;