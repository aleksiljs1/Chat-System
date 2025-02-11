import { User } from "../models/user";
import { MessageTypes } from "../consts/message-types";

export class ChatMediator implements Mediator {
  private users: User[] = [];

  public connect(user: User) {
    this.users.push(user);
    user.setMediator(this);
  }

  public notify(sender: User, event: string, message: string): void {
    switch (event) {
      case MessageTypes.sendMessage: {
        const otherUsers = this.users.filter((u) => u.id !== sender.id);
        for (const otherUser of otherUsers) {
          otherUser.receiveMessage(message);
        }
        break;
      }
      case MessageTypes.setOffline: {
        const otherUsers = this.users.filter((u) => u.id !== sender.id);
        for (const otherUser of otherUsers) {
          otherUser.setOffline(message);
        }
        break;
      }
    }
  }
}
