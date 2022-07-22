import express, { Express } from "express"
import responseHander from "./responseHander"
import routes from "../src/routes/index"
import cors from "cors"

function initMiddleware (app: Express) {
  app.use(cors())
  app.use(express.json())
  app.use(responseHander)
  app.use("/", routes)
}

export default initMiddleware