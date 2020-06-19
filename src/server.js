const express = require("express")
const nunjucks = require("nunjucks")
const client = require("./database/client")

const server = express()

server.use(express.static("public"))
server.use(express.urlencoded({ extended: true }))

nunjucks.configure("src/views", {
  express: server,
  noCache: true
})

server.get("/", (req, res) => {
  return res.render("index.html", { title: "Um Título" })
})

server.get("/create-point", (req, res) => {
  return res.render("create-point.html")
})

server.post("/savepoint", (req, res) => {
  const sql = `
    INSERT INTO places (
      image,
      name,
      address,
      address2,
      state,
      city,
      items
      ) VALUES ($1,$2,$3,$4,$5,$6,$7);
    `

  const values = [
    req.body.image,
    req.body.name,
    req.body.address,
    req.body.address2,
    req.body.state,
    req.body.city,
    req.body.items
  ]

  const query = {
    text: sql, 
    values
  }

  function afterInsertData(err) {
    if (err) {
      console.log(err)
      return res.send("Erro no cadastro")
    }
    console.log("Cadastrado com sucesso")

    return res.render("create-point.html", { saved: true })
  }

  client.query(query, afterInsertData)
})

server.get("/search", (req, res) => {
  const search = req.query.search
  
  let sql = ''
  if (search == '') {
    sql = `SELECT * FROM places`
  } else {
    sql = `SELECT * FROM places WHERE UPPER(city) LIKE '%${search.toUpperCase()}%'`;
  }

  client.query(sql, function (err, data) {
    if (err) {
      return console.log(err)
    }
    
    const total = data.rowCount
    return res.render("search-results.html", { places: data.rows, total })
  })
})

server.listen(process.env.port || 3000)
