import serverless from 'serverless-http'
import app from '../src/components/Home/Home'

// app.get('/healthcheck', (req, res) => res.status(200).send('ok'))

module.exports.handler = serverless(app)
