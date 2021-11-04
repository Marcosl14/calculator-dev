export class CreateTechnologyCommand {
  private name: string;

  constructor(name: string) {
    this.name = name.toUpperCase();
  }

  public getName() {
    return this.name;
  }
}
