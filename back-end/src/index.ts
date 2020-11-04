/*
* @Description 入口文件
* @author qiangang
* @date 2020/11/2
*/

import Koa from 'koa';
import router from './router';
import test from './test';
const app = new Koa();

// 使用路由
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);