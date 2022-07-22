import { Router } from "express"
import { login } from "../services/userServices"
const router: Router = Router()

router.post("/login", login)

export default router

