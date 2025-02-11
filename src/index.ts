import { ChatMediator } from "./mediators/mediator";
import { User1 } from "./models/user1";
import { User2 } from "./models/user2";

const user1 = new User1();
const user2 = new User2();
const mediator = new ChatMediator(user1, user2);

console.log("User1 :");
user1.sendMessage("Hi User2! How are you?");

console.log("");

console.log("User2 :");
user2.sendMessage("Hello User1! I'm good, thanks!");
