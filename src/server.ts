import Fastify, { FastifyInstance } from "fastify"
import { setGeojsonRoutes } from "./routes/geojsonRoutes.js"
import dotenv from "dotenv"

dotenv.config()

const fastify: FastifyInstance = Fastify({
  logger: true,
})

fastify.register(setGeojsonRoutes)

// Start the server
const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: "0.0.0.0" })
    fastify.log.info("Server started on port 3000")
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
