import express from "express"

import logger from "./utils/logger"

import config from "config"

import initMiddleware from "../middleware"

import dbConnect from "./utils/dbConnect"

const PORT = config.get<number>('port')

const app = express()

initMiddleware(app)

app.listen(PORT, async () => {
  logger.info("服务已启动: http://localhost:5555");
  // await dbConnect()
})