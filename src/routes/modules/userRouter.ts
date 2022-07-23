// 用户相关 router

import express from "express"

// 引入用户登录模块
import userServices from "../../services/userServices"

const router = express.Router()


router.post("/login", userServices.login)

export default router

