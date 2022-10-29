const fs = require ("fs")

const path = require ("path")

const userData = path.join(__dirname, "folder", "user_data.json")

function getUserData (req, res) {
    res.setHeader("Content-Type", "application/json")

    fs.readFile(userData, "utf8", (err, data) => {
        if (err) {
            console.log(err);
            res.writeHead(400)
            res.end("An error occured")
        }
        res.end(data)
    })
}


module.exports = {getUserData}