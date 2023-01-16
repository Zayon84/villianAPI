
const express = require("express")
const { get } = require("http")
const app = express()
const PORT = process.env.PORT || 3000   // kollar först om det finns en internet port

const villians = { allVillans: [{name: "Tri Pack", city: "Chicago", punchLine: "So long mothersucker"},
 {name:"FireLord", city:"Hell", punchLine:"Its getting hot in here, so lets take of our cloths"},
 {name: "Mr Freeze", city:"Gotham", punchLine:"Freeze, Im Freeze"}]}

// const games = { games [{name:"Fallout", genre: "RPG"},
// {name: "Satisfactory", "Open World Builder"}]}

const firstName = ["Tony", "Pablo", "Joel", "Jay","Omar","Maria", "Katalea" ]
const lastName = ["Skottlossning", "Sneaöga", "Panna", "Torpeden", "Kofot", "TV"]
const cites = ["Marbella","Collombia", "Gårdsten"]

app.get("/newentry", (req,res) =>{
    newEntry()
    res.send("Added new data  ")
})

function newEntry(){
    const randomFirstName = firstName[Math.floor(Math.random() * firstName.length)]
    const randomLastName = lastName[Math.floor(Math.random() * lastName.length)]
    const randomCity = cites[Math.floor(Math.random() * cites.length)]
    const fullName = randomFirstName + " " + randomLastName

    villians.allVillans.push({name: fullName, city: randomCity})

    return villians
}


app.get("/", (req, res)=> {
    res.sendFile(__dirname + "/index.html")
})

app.get("/villians", (req,res) =>{
    res.send(villians)
})

app.listen(PORT, () =>{
    console.log("Listening to port" + PORT)
    console.log(villians)
})