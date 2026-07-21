import express from 'express'
const app = express()
import HealthCheakRoute from './routes/health.route.js'
import contactRouter from './routes/contact.route.js'
import errorHandler from './middlewares/errorHandler.js'

app.use(express.json())

app.use('/api/v1',HealthCheakRoute)
app.use('/api/v1',contactRouter)
app.use(errorHandler)
export default app