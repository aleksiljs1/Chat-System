import { User1 } from "../models/user1";
import { User2 } from "../models/user2";

export class ChatMediator implements Mediator {
  private user1: User1;
  private user2: User2;

  constructor(u1: User1, u2: User2) {
    this.user1 = u1;
    this.user1.setMediator(this);
    this.user2 = u2;
    this.user2.setMediator(this);
  }

  public notify(sender: object, event: string, message?: string): void {
    if (event === `sendMessage`) {
      if (sender === this.user1) {
        console.log("We are passing a message from user 1 to user 2");
        this.user2.receiveMessage(message!);
      } else if (sender === this.user2) {
        console.log("We are passing a message from user 2 to user 1");
        this.user1.receiveMessage(message!);
      }
    }
  }
}
