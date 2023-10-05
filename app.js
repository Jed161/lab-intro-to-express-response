// Dependencies
const express = require("express")

// Configuration
const app = express()
const PORT = 3003

// Routes
app.get("/", (request, response) => {
  response.send("Hello World!")
});

app.get("/Emeril", (req, res) => {
    res.send("Bam!")
})
app.get("/Steve-McGarrett", (req, res) => {
    res.send("Book'em Danno!")
})
app.get("/Coach-Taylor", (req, res) => {
    res.send("Clear eyes, full hearts, can't Lose")
})
app.get("/Homer-Simpson", (req, res) => {
    res.send("D'Oh")
})
app.get("/Bruce-Banner", (req, res) => {
    res.send("Don't make me angry")
})
app.get("/JJ-Evans", (req, res) => {
    res.send("Dy-no-myte")
})
app.get("/Batman", (req, res) => {
    res.send("To the Batmobile")
})
app.get("/Hannibal-Smith", (req, res) => {
    res.send("I love it when a plan comes together")
})
app.get("/Fraiser", (req, res) => {
    res.send("I'm Listening")
})

// Listen
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}` )
});
