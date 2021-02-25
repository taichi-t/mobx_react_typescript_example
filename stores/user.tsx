import { observable, action, makeAutoObservable, runInAction } from 'mobx';
import { fetcher } from '../libs/fetcher';

interface User {
  id: string;
  name: string;
}

class UserStore {
  user: Partial<User> = { id: undefined, name: undefined };

  constructor() {
    makeAutoObservable(this, {
      fetchUser: action,
      user: observable,
    });
  }

  public async fetchUser(id: string) {
    const data = await fetcher<User>(`http://localhost:3000/users/${id}`);
    runInAction(() => {
      this.user = data;
    });
  }
}

const userStore = new UserStore();
export default userStore;
export { UserStore };
