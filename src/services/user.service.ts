import { User } from "../models/user.model";

export class UserService {
  private users: User[] = [];

  getAllUsers(): User[] {
    return this.users;
  }

  getUserById(id: number): User | undefined {
    return this.users.find((user) => user.id === id);
  }

  addUser(user: User): void {
    this.users.push(user);
  }
}
