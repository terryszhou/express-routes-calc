const express = require("express")
const app = express()
const PORT = 9001
const log = console.log

app.get("/", (req, res) => {
    res.send("Hello, world!")
})

//FULL SOLVE (one function)
app.get("/:z/:x/:y", (req, res) => {
    const z = req.params.z
    const x = parseInt(req.params.x)
    const y = parseInt(req.params.y)

    if (z == "add") {
        res.send("<h1>" + `${x} + ${y} = ${x + y}.` + "</h1>")
    } else if (z == "subtract") {
        res.send("<h1>" + `${x} - ${y} = ${x - y}.` + "</h1>")
    } else if (z == "multiply") {
        res.send("<h1>" + `${x} x ${y} = ${x * y}.` + "</h1>")
    } else if (z == "divide") {
        res.send("<h1>" + `${x} / ${y} = ${x / y}.` + "</h1>")
    } else {
        res.send("<h1>wut</h1>")
    }
})

// UNFINISHED WILDCARD SOLVE
// app.get("/*", (req, res) => {
//     const pms = req.params[0].split("/")
//     const math = req.query.math

//     if (math == "add") {
//         res.send(pms.reduce((a , b) => (a + b)))
//     } else if (math == "subtract") {
//         res.send(pms.reduce((a , b) => (a - b)))
//     } else if (math == "multiply") {
//         res.send(pms.reduce((a , b) => (a * b)))
//     } else if (math == "divide") {
//         res.send(pms.reduce((a , b) => (a / b)))
//     } 
// })

app.listen(PORT, () => {
    log(`The port level! IT'S OVER ${PORT}!!!`)
})

// WORKING SOLUTION -- alternate
// app.get("/:x/:y", (req, res) => {
//     const x = parseInt(req.params.x)
//     const y = parseInt(req.params.y)

//     if (req.query.math == "add") {
//         res.send("<h1>" + `${x} + ${y} = ${x + y}.` + "</h1>")
//     } else if (req.query.math == "subtract") {
//         res.send("<h1>" + `${x} - ${y} = ${x - y}.` + "</h1>")
//     } else if (req.query.math == "multiply") {
//         res.send("<h1>" + `${x} x ${y} = ${x * y}.` + "</h1>")
//     } else if (req.query.math == "divide") {
//         res.send("<h1>" + `${x} / ${y} = ${x / y}.` + "</h1>")
//     }
// })