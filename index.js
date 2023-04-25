
const dotenv = require('dotenv')
const connection = require('./database/connection')
const app = require('./src/server')
const port = process.env.PORT || 4000

dotenv.config()
connection();


app.listen(port, () => {
    console.log(`Server running on the port ${port}`);
})