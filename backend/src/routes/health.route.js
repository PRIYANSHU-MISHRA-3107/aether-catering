import express from 'express'
import HealthCheak from '../controllers/health.controller.js'

const router = express.Router()

router.get('/health',HealthCheak)

export default router