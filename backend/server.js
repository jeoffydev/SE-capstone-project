const express = require("express");
let dbConnect = require("./dbConnect");
 

const app = express();
require("dotenv").config();
let userRoutes = require('./routes/userRoutes')
// parse requests of content-type -

app.use(express.json());
app.use('/api/users', userRoutes)
app.get("/", (req, res) => {
    res.json({ message: "Backend Application" });
});
// set port, listen for requests
const PORT = process.env.PORT || 8080;
    app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});





/* 

First create a new express application using Node.js. To do this:
1. Create a new folder for your app, called mongodb-app or similar
2. Within this folder create a server.js file, with the starter content as
shown on the right
3. From within the new folder, run npm init and accept the defaults to
create a package.json file and initialise your new app
4. Run npm install express to install the express module.
5. Run npm install dotenv to install the dot env package.
The next step is to enable our app to connect to a MongoDB database.
Before we connect our application using mongoose, please make sure
your mongodb server is running in the background.
Next, install the mongoose module from npm in our application. For
doing so we just need the command
> npm install mongoose --save

*/