import { Router } from 'express'

const router = Router()

router.get('/status', (_req, res) => {
  res.json({ status: 'ok', service: 'presscentra-api' })
})

export default router
