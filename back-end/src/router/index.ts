/*
* @Description 路由管理
* @author qiangang
* @date 2020/11/3
*/
import fs from 'fs';
import path from 'path';
import koaRouter from 'koa-router';
const router: any = new koaRouter();

// 递归查找控制器
const registerRoute = (dir: string) => {
  const files = fs.readdirSync(dir);
  files.filter(file => /Controller$/.test(file)).forEach(async file => {
    const moudle = require(path.resolve(__dirname, `../controllers/${file}`));
    const controller = new moudle.default();
    const {
      route,
      interfaceMap
    } = controller;
    const keys = new Set(interfaceMap.keys());
    keys.forEach(function (key) {
      const item = interfaceMap.get(key);
      router[item.type](`${route}${key}`, (ctx: any, next: any) => {
        const result = controller[item.methond].call(this, ctx);
        ctx.body = result;
        next();
      });
    })
  })
}

registerRoute(path.resolve(__dirname, '../controllers'));



export default router;