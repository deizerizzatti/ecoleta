const { Pool, Client } = require("pg")
const dotenv = require("dotenv").config()

const connectionString = process.env.DATABASE_URL

const client = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false
  }
})

module.exports = client
