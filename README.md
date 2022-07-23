# Express + TypeScript + Mysql 模版

## 使用方法

1. 安装

```bash
git clone https://github.com/JanuC/express-ts-demo.git
```

2. 安装依赖

```bash
npm install
```

3. 修改端口

默认监听的端口为 `5555`，需要监听其他端口可在 `config/default.ts` 中修改 `port` 参数

4. 修改 Mysql 连接

在 `config/default.ts` 将 db 修改为你的 Mysql 连接

5. 启动项目

```bash
npm run dev
```

出现以下界面，表示连接成功：

![](https://janu-picgo.oss-cn-chengdu.aliyuncs.com/images/20220723102918.png)

## 新增模块

默认提供了用户相关模块，在 `services/userServices` 中，只需在该文件下添加用户相关接口即可

如果需要添加其他模块，只需在 `services` 目录下新增其他模块，然后在 `routes/moduls` 中新增路由即可。

以 Cart 模块为例：

1. `services` 目录下新增 `cartServices.ts`:

```ts
import { Request, Response } from "express"
import commonRes from "../utils/commonRes"
import queryDB from "../utils/queryDB";

async function addGoods (req: Request, res: Response) {
    let sql = "insert into ..."
    let results = await queryDB(sql)
    commonRes(res, { results })
}

export default {
  addGoods
}
```

2. `routes/moduls` 中新增 `cartRouter.ts`:
```ts
// 购物车相关 router

import express from "express"

// 引入购物车模块
import cartServices from "../../services/cartServices"

const router = express.Router()

router.post("/addGoods", cartServices.addGoods)

export default router
```

3. 在 `routes/index` 中新增：

```ts
import cartRouter from "../routes/modules/cartRouter"
router.use("/cart", cartRouter)
```

4. 前端访问接口

通过 `/cart/addGoods` 进行请求