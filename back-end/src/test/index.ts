import UserController from '../controllers/userController';
import User from '../entitys/user';

export default function test() {
  const userInfo :User = {
    userId: '1',
    userName: '1',
    headPortrait: '',
    email: '',
    mobile: 1
  }
  const c = new UserController();
  const a = c.createUser(userInfo);
}

