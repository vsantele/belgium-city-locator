# Belgium City Locator

A simple web application that allows users to search the zipcode from a point in belgium.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [Docker](https://docs.docker.com/get-docker/)
- [pnpm](https://pnpm.io/installation)

### Running the application locally

To run the application, you can use the following commands:

```sh
pnpm install
pnpm start
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### Running the application with Docker

```sh
docker compose up --build
```

## API

- `/geojson/find/:lat/:lon`
  - `lat`: Latitude
  - `lon`: Longitude
  - Returns the zipcode of the given point

## Docker

the image is available at [Docker Hub](https://hub.docker.com/r/vsantele/belgium-zipcode-from-coordinates)

## Data

The datasource is from [ODWB](https://www.odwb.be/explore/dataset/postal-codes-belgium/)

The current data was downloaded on 2024-03-15
