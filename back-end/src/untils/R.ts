/*
* @Description 接口返回类
* @author qiangang
* @date 2020/11/4
*/

class Response {
  // 响应码
  private code: number;
  // 响应信息
  private msg: string = '';
  // 响应数据
  private data: any = null;

  /**
   * 响应成功
   */
  public ok() {
    this.code = 200;
    return this;
  }

  /**
   * 响应错误
   */
  public error() {
    this.code = 500;
    return this;
  }

  /**
   * 添加响应信息
   * @param key
   * @param value
   */
  public put(key: string, value: any) {
    const _self: any = this;
    _self[key] = value;
    return this;
  }
}

const R = new Response();

export default R;