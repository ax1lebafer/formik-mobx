import { makeAutoObservable } from "mobx";
import { UserType } from "../types/user.ts";

class UserStore {
  user: UserType | null = null;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  async login(email: string, password: string) {
    this.isLoading = true;
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        this.user = { email, password };
        this.isLoading = false;
        resolve();
      }, 2000);
    });
  }

  logout() {
    this.user = null;
  }

  get isLoggedIn() {
    return this.user !== null;
  }
}

export default new UserStore();
