# BTP-BackEnd


## important steps before installing or creating docker image
### `.env file`
Create a file named .env in root folder and define variables accordingly as mentioned in the installation steps.
MYSQL_PASSWORD=<string:Password of the database created in local>
MYSQL_DATABASENAME='notesApp'
MYSQL_HOSTNAME='localhost' or '127.0.0.1'  

## How to run in your local system?

### `install node V:18.3.0`
install node following any docs

### `Git Clone`
Use git clone command to clone this repository.

### `npm install`
This command will install all the dependencies

### `npm start`
Runs the app in the development mode.\
Open [http://localhost:4444](http://localhost:4444) to view it in your browser.Define three variables and values accordingly as shown below:

### `Connecting to the database`
Inside the .env file the variables need to be filled as described below
MYSQL_PASSWORD=<string:Password of the database created in local>
MYSQL_DATABASENAME='notesApp'
MYSQL_HOSTNAME='localhost' or '127.0.0.1'
Make sure you create a database named 'Applicants2019' as the root user.

## How to run using docker?

### `Git Clone`
Use git clone command to clone this repository.

### `docker compose up`
This command will spawn two containers one containing the backend server and the other containing the database.
Make sure you are in the same directory in which dockerfile is present.

### `docker compose down`
This command will remove the spawned containers.

## End Points 

### `localhost:4444/api/notes/create`(POST Request)
    Request Body Format:
    {
        "title":"title of note"
        "content":'content of note
    }
    Response:
    if succeeds {"result":Note Created with Id createdID}
    else {"result":"Error While Creating"}

### `localhost:4444/api/notes/:noteid`(GET Request)
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

### `localhost:4444/api/notes/edit/:noteid`(PUT Request)
    :note id is the id of note you want
    Request Body Format:     
    {
        "title":"title of note"
        "content":'content of note
    }
    Response:
    if succeeds {"result":` Edited Note with ID ${noteId}`}
    else {"result":"Error While Editing"}

### `localhost:4444/api/notes/:noteid`(DELETE Request)
    :note id is the id of note you want to delete
    Request Body Format:-     
    Response:
    if succeeds {"result":` Deleted Note with ID ${noteId}`}
    else {"result":"Error While Deleting"}