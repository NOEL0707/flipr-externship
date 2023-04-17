var noteScheme=`(
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    content TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)
`
var noteSchemeColumnNames=
[
    "id",
    "user_id" , 
    "title",
    "content",
    "created_at",
    "updated_at"
    
]
module.exports={noteScheme,noteSchemeColumnNames};