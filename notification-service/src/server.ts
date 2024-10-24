import express, { Express } from "express"
import { Server } from "http"
import { errorConverter, errorHandler } from "./middlewares"
import config from "./config/config"
import { rabbitMQService } from "./services/RabbitMQService"
import { EmailService } from "./services"

const app: Express = express()
let server: Server
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(errorConverter)
app.use(errorHandler)

server = app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`)
})

const initializeRabbitMQClient = async () => {
  try {
    await rabbitMQService.init()
    console.log("RabbitMQ client initialized and listening for messages.")
  } catch (err) {
    console.error("Failed to initialize RabbitMQ client:", err)
  }
}

initializeRabbitMQClient()