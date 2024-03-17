import { Feature, MultiPolygon, Polygon } from "geojson"

export default interface PostalCode {
  geo_point: {
    lon: number
    lat: number
  } | null
  geo_shape: Feature<Polygon | MultiPolygon> | null
  post_code: number
}
