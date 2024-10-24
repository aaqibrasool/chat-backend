import express from "express"
import proxy from "express-http-proxy"
import config from "./config/config"

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const auth = proxy(config.USER_SERVICE_URL!)
const messages = proxy(config.CHAT_SERVICE_URL!)
const notifications = proxy(config.NOTIFICATION_SERVICE_URL!)

app.use("/api/auth", auth)
app.use("/api/messages", messages)
app.use("/api/notifications", notifications)

const server = app.listen(config.PORT, () => {
  console.log("Gateway is Listening to Port 8080")
})
