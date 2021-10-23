export class DeleteRateCommand {
  private id: string;

  constructor(pId: string) {
    this.id = pId;
  }

  public getId() {
    return this.id;
  }
}
