// 统一响应参数

import { Response } from "express"
import { Code, codeType, CodeMessage } from "../../constants/code"
import logger from "./logger"

interface ResOptions {
  type?: codeType,
  status?: number,
  message?: unknown
}

// 默认成功响应
function commenRes(res: Response, data: unknown, options?: ResOptions) {
  options = Object.assign({ type: Code[200] }, options || {})

  const { type, status, message } = options
  let resStatus = status
  
  if (resStatus === undefined) {
    // 根据状态设置状态码
    resStatus = type === Code[200] ? 200 : 409
  }

  // 响应参数
  const sendRes: { code: number, data: unknown, message?: unknown } = {
    code: Code[type as codeType],
    data
  }
  // 响应描述
  message && (sendRes.message = message)

  return res.status(resStatus).send(sendRes)
}

// 错误响应
commenRes.error = function(res: Response, data: unknown, message?: unknown, status?: number) {
  logger.error(message || CodeMessage["error"])
  this(res, data, {
    type: "error",
    message: message || CodeMessage["error"],
    status: status || 409
  })
}

// 无权限响应
commenRes.denied = function(res: Response, data: unknown) {
  this(res, data, {
    type: "denied",
    message: CodeMessage["denied"],
    status: 401
  })
}

export default commenRes
