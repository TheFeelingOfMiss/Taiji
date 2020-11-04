/*
* @Description 控制器装饰
* @author qiangang
* @date 2020/11/2
*/

export default function controller (route: string) {
  return function <T extends {new(...args:any[]):{}}> (target: T) {
    return class extends target {
      // 接口路由
      public route = route;

      // 接口映射
      public interfaceMap = target.prototype.interfaceMap || new Map();
    };
  }
}