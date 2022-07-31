import express from 'express'

import pedidoClienteController from './controller/pedido-cliente-controller.js'


const app = express()

app.use(express.json())


pedidoClienteController(app)

export default app