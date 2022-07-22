// 封装查询

import dbConnect from "./dbConnect"
let db = dbConnect()
async function queryDB(sql: string) {
  return new Promise((resolve, reject) => {
    db.query(sql, (err, res) => {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    })
  })
}

export default queryDB