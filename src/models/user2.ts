import { BaseComponent } from "./base-component";

export class User2 extends BaseComponent {
  public sendMessage(message: string): void {
    console.log("User2 sends a message:", message);
    this.mediator.notify(this, `sendMessage`, message);
  }

  public receiveMessage(message: string): void {
    console.log("user2 received message:", message);
  }
}
