import { FastifyInstance } from "fastify"
import { GeojsonController } from "src/controllers/geojsonController.js"

interface RouteParams {
  lat: string
  lon: string
}

export async function setGeojsonRoutes(server: FastifyInstance): Promise<void> {
  const geojsonController = new GeojsonController()

  await geojsonController.loadGeojsonData()

  server.get("/geojson/find/:lat/:lon", async (request, reply) => {
    const { lat, lon } = request.params as RouteParams
    const item = geojsonController.findItemByPoint(
      parseFloat(lat),
      parseFloat(lon)
    )
    reply.send(item)
  })
}
