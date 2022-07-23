import { Router } from "express"

// 用户登录相关路由
import userRouter from "../routes/modules/userRouter"

const router: Router = Router()

// 所有和用户相关的请求都放在 /user 下
router.use("/user", userRouter)

export default router

