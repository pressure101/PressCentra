import express from 'express'

const app = express()
const port = process.env.PORT ?? 4000

app.use(express.json())

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'presscentra-api' })
})

app.listen(port, () => {
  console.log(`PressCentra API is running at http://localhost:${port}`)
})
