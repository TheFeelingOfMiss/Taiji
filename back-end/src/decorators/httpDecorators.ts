/*
* @Description 请求方式装饰器
* @author qiangang
* @date 2020/11/2
*/

export default function httpDecorators(type: string, route: string): Function {
  return function (target: any, propertyKey: string, descriptor: PropertyDecorator) {
    const interfaceMap = target.constructor.prototype.hasOwnProperty('interfaceMap') ? target.constructor.prototype.interfaceMap : new Map<any, any>();
    if(!interfaceMap.has(route)) {
      interfaceMap.set(route, {
        methond: propertyKey,
        type
      });
    }
    target.constructor.prototype.interfaceMap = interfaceMap;
  }
}

/**
 * get 请求
 * @param route
 */
const get = function (route: string): Function {
  return httpDecorators('get', route);
}

/**
 * post 请求
 * @param route
 */
const post = function (route: string) {
  return httpDecorators('post', route);
}

export {
  get,
  post
}