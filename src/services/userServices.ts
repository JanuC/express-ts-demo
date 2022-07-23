// 处理用户相关逻辑

import { Request, Response } from "express"
import commonRes from "../utils/commonRes"
import queryDB from "../utils/queryDB";


async function login (req: Request, res: Response) {
    let sql = "select * from user"
    let results = await queryDB(sql)
    commonRes(res, { results })
}

export default {
  login
}