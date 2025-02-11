
interface Mediator {
  notify(sender: object, event: string, message?: string): void;
}