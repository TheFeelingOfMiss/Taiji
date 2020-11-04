/*
* @Description http接口
* @author qiangang
* @date 2020/11/4
*/

interface Response {
  // 响应码
  code: number,

  // 响应信息
  msg: string,

  // 响应数据
  data: any
}

export {
  Response
}