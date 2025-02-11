import { BaseComponent } from "./base-component";

export class User1 extends BaseComponent {
  public sendMessage(message: string): void {
    console.log("User1 sends a message:", message);
    this.mediator.notify(this, `sendMessage`, message);
  }

  public receiveMessage(message: string): void {
    console.log("user1 received message:", message);
  }
}
