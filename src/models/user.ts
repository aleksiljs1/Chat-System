import { BaseComponent } from "./base-component";
import { MessageTypes } from "../consts/message-types";

export class User extends BaseComponent {
  constructor(id: string) {
    super();
    this.id = id;
  }

  public id: string = "";
  public status: string = "Online";

  public sendMessage(message: string): void {
    console.log(`User with id ${this.id} sent message:`, message);
    this.mediator?.notify(this, MessageTypes.sendMessage, message);
  }

  public receiveMessage(message: string): void {
    console.log(`user with id ${this.id} received message:`, message);
  }

  public setOffline(status: string): void {
    this.status = status;
  }
}
