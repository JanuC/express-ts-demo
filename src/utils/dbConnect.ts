import mysql, {Connection} from "mysql"
import config from "config"
import logger from "./logger"

function dbConnect() {
  const dbConfig = config.get<object>("db")
  const db: Connection = mysql.createConnection(dbConfig)
  db.connect((err) => {
    if(err) {
      logger.error("数据库连接失败：" + err.message)
      return
    }
    logger.info("数据库连接成功")
  })
  return db
}

export default dbConnect
