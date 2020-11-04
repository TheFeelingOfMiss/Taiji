/*
* @Description 用户相关控制器
* @author qiangang
* @date 2020/11/2
*/

import User from '../../entitys/user';
import controller from '../../decorators/controller';
import {get, post} from '../../decorators/httpDecorators';
import R from '../../untils/R';

@controller('/user')
class UserController {

  /**
   * 用户注册
   */
  @get('/create')
  public createUser(userInfo: User, ...args: []): any {
    return R.ok();
  }

}

export default UserController;