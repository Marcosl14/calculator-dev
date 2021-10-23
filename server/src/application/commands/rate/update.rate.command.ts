export class UpdateRateCommand {
  private id: string;
  private averageSalary: string;
  private grossMargin: string;

  constructor(pId: string, pAverageSalary: string, pGrossMargin: string) {
    this.id = pId;
    this.averageSalary = pAverageSalary;
    this.grossMargin = pGrossMargin;
  }

  public getId() {
    return this.id;
  }
  public getAverageSalary() {
    return this.averageSalary;
  }
  public getGrossMargin() {
    return this.grossMargin;
  }
}
