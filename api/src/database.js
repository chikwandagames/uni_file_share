
import mongoose from 'mongoose'
// To remove the warnings in the terminal
mongoose.set('useNewUrlParser', true)
mongoose.set('useUnifiedTopology', true)
// Addresses the findOneAndUpdate call, which calls a mongo function which
// is nolonger supported, the line bellow makes sure we call the supported version
mongoose.set('useFindAndModify', false)
mongoose.set('useUnifiedTopology', true)
mongoose.set('useCreateIndex', true)


import dotenv from 'dotenv'
dotenv.config();

const db_url = process.env.DB_URL

// Connect to the database
class Database {
  constructor() {
    this.connect()
  }

  connect() {
    const mongoose = require('mongoose')
    mongoose
      .connect(db_url)
      .then(() => {
        console.log('database connection successful')
      })
      .catch((err) => {
        console.log('database connection error ' + err)
      })
  }
}

// Create new instance
// module.exports = new Database()
export const db = new Database()


