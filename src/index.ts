import { ChatMediator } from "./mediators/mediator";
import { User } from "./models/user";

const mediator = new ChatMediator();

const user1 = new User('1');
const user2 = new User('2');


mediator.connect(user1);
mediator.connect(user2);


console.log("User1:");
user1.sendMessage("Hi User2! How are you?");

console.log("");
console.log("User2 :");
user2.sendMessage("Hello User1! I'm good, thanks!");
