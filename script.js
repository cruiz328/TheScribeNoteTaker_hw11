
//    Declare the installed framesworks
const express = require('express');
const bodyParser = require('body-parser');
//    call the express and Body-parser
let app = express();
app.use(bodyParser.urlencoded({
extended: true
    }
        )
            );
//    we installed the ejs and created a file inside the views
app.set('view engine', 'ejs');

// end of code
app.listen(5000, function()
{console.log("NoteApp server is running at port 5000...")
    }
        );