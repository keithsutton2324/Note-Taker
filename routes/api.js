var router = require("express").Router()
var db = require("../db/db.json") ||[]
var fs= require("fs")

router.get("/api/notes", function(req,res){

  db = JSON.parse(fs.readFileSync("./db/db.json"))
  console.log("READ",db)
  res.json(db)
})
router.post("/api/notes", function(req,res){
  console.log(req.body)
  var newnote = {
    id: Math.floor(Math.random()*100),
    title: req.body.title,
    text:req.body.text
  }
  db.push(newnote)
  db = fs.writeFileSync("./db/db.json", JSON.stringify(db),function(error){
    if (error) throw error;
    console.log("WRITE",db)
    res.json(db)
  })
})

module.exports = router
