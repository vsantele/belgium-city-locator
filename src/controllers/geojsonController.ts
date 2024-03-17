import { booleanPointInPolygon } from "@turf/boolean-point-in-polygon"
import { Feature, Point } from "geojson"
import { point } from "@turf/helpers"
import PostalCode from "src/model/postalCode.js"
import { promises as fs } from "fs"

export class GeojsonController {
  private geojsonData: PostalCode[]

  constructor() {
    this.geojsonData = []
  }

  async loadGeojsonData(): Promise<void> {
    try {
      const filePath = new URL(
        "../../data/postal-codes-belgium.json",
        import.meta.url
      )
      const fileData = await fs.readFile(filePath, "utf-8")
      this.geojsonData = JSON.parse(fileData) as PostalCode[]
      console.log("GeoJSON data loaded")
    } catch (error) {
      console.error("Error loading GeoJSON data:", error)
    }
  }

  findItemByPoint(latitude: number, longitude: number): number | null {
    const searchPoint: Feature<Point> = point([longitude, latitude])
    for (const city of this.geojsonData) {
      if (
        city.geo_shape &&
        booleanPointInPolygon(searchPoint, city.geo_shape.geometry)
      ) {
        return city.post_code
      }
    }
    return null
  }
}
