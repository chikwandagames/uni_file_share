import http from 'http';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import multer from 'multer';
import path from 'path'

import AppRouter from './router'
// Connect to db
import mongoose from './database'

// File storage config
const storageConfig = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/tmp/my-uploads')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname))
  },
})

const upload = multer({ storage: storageConfig })

const PORT = 3000
const app = express()
app.server = http.createServer(app)

app.use(morgan('dev'))

app.use(
  cors({
    exposedHeaders: '*',
  })
)

// For getting json data from the request
app.use(express.urlencoded({ limit: '50mb', extended: true }))
app.use(express.json({ limit: '50mb' }))

app.set('root', __dirname)

// Initialize router
const router = new AppRouter(app)

app.server.listen(process.env.PORT || PORT, () => {
  console.log(`App is running on port ${app.server.address().port}`)
})

export default app
