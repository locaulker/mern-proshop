import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'

import productRoutes from './routes/productRoutes.js'

dotenv.config()

connectDB()

const app = express()

// Routes
app.get('/', (req, res) => {
  res.send('API is running....')
})
app.use('/api/products', productRoutes)

// 404 not found
app.use(notFound)

// Error Middleware
app.use(errorHandler)

// Post
const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
  )
)
