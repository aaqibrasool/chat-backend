import { config } from "dotenv"

const configFile = `./.env`
config({ path: configFile })

const {
  USER_SERVICE_URL,
  CHAT_SERVICE_URL,
  NOTIFICATION_SERVICE_URL,
  PORT,
  NODE_ENV,
} = process.env

export default {
  USER_SERVICE_URL,
  CHAT_SERVICE_URL,
  NOTIFICATION_SERVICE_URL,
  env: NODE_ENV,
  PORT,
}
