import { Injectable } from "@angular/core";
import { User } from "./User";

@Injectable({
  providedIn: "root"
})
export class AccountService {
  constructor() {}

  public token: string = null;
  private users: User[] = [];

  login(username: string, password: string): boolean {
    let user = this.users.filter(
      x => x.username === username && x.password === password
    );
    if (user.length !== 0) {
      this.token = user[0].username;
      return true;
    } else {
      this.token = null;
      return false;
    }
  }
  logout(): void {
    this.token = null;
  }

  register(username: string, password: string): boolean {
    let user = this.users.filter(x => x.username === username);
    if (user.length === 0) {
      let newUser: User = {
        username: username,
        password: password
      };
      this.users.push(newUser);
      return true;
    } else {
      return false;
    }
  }
}
