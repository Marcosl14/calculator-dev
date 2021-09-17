class Rate {
  private id: number;
  private technology_id: number;
  private seniority: string;
  private languaje: string;
  private average_salary: string;
  private gross_margin: string;
  private currency: string;

  constructor(
    technology_id: number,
    seniority: string,
    languaje: string,
    average_salary: string,
    gross_margin: string,
    currency: string,
  ) {
    this.technology_id = technology_id;
    this.seniority = seniority;
    this.languaje = languaje;
    this.average_salary = average_salary;
    this.gross_margin = gross_margin;
    this.currency = currency;
  }

  public getTotal(): number {
    return parseFloat(this.gross_margin) + parseFloat(this.average_salary);
  }

  public getGrossMarginPercentage(): number {
    return parseFloat(this.gross_margin) / this.getTotal();
  }
}
export default Rate;
