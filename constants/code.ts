
// 枚举状态码，可以根据自己的需要定义
enum Code {
  success = 200,
  denied,
  error
}

enum CodeMessage {
  success = "请求成功",
  denied = "权限不足",
  error = "系统异常"
}

// 状态类型，只能是 Code 中的枚举状态
type codeType = keyof typeof Code

export { Code, codeType, CodeMessage }