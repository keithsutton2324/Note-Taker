var express = require("express")
var app = express()
var PORT = process.env.PORT || 8080
var api = require("./routes/api");
var html = require("./routes/html")

app.use(express.urlencoded({extended:true})) 
app.use(express.json())
app.use(api)
app.use(html)



app.listen(PORT, function(){
  console.log("Server running on ",PORT)
})