const http = require ("http")

const path = require ("path")

const fs = require ("fs")

const {getUserData} = require ("./program")

// const HOSTNAME = "localhost"


const PORT = process.env.port || 2600

const server = http.createServer(requestHandler)

function requestHandler (req, res) {
    if (req.url === "/userData" && req.method === "GET") {
        getUserData (req, res)
    }
}

server.listen(PORT, HOSTNAME, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
})
