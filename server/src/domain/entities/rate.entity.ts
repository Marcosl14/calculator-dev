import Technology from './technology.entity';
import LanguageEnum from '../enums/language.enum';
import SeniorityEnum from '../enums/seniority.enum';

export default class Rate {
  private id: string | null = null;
  private technology: Technology;
  private seniority: SeniorityEnum;
  private language: LanguageEnum;
  private averageSalary: string;
  private grossMargin: string;
  private currency: string;

  constructor(
    technology: Technology,
    seniority: SeniorityEnum,
    language: LanguageEnum,
    averageSalary: string,
    grossMargin: string,
    currency: string,
  ) {
    this.technology = technology;
    this.seniority = seniority;
    this.language = language;
    this.averageSalary = averageSalary;
    this.grossMargin = grossMargin;
    this.currency = currency;
  }

  public getId(): string | null {
    return this.id;
  }

  public setId(pid: string) {
    this.id = pid;
  }

  public getTechnology(): Technology {
    return this.technology;
  }

  public setTechnology(ptechnology: Technology) {
    this.technology = ptechnology;
  }

  public getSeniority(): SeniorityEnum {
    return this.seniority;
  }

  public setSeniority(pseniority: SeniorityEnum) {
    this.seniority = pseniority;
  }

  public getLanguage(): LanguageEnum {
    return this.language;
  }

  public setLanguage(planguage: LanguageEnum) {
    this.language = planguage;
  }

  public getAverageSalary(): string {
    return this.averageSalary;
  }

  public setAverageSalary(paverageSalary: string) {
    this.averageSalary = paverageSalary;
  }

  public getGrossMargin(): string {
    return this.grossMargin;
  }

  public setGrossMargin(pgrossMargin: string) {
    this.grossMargin = pgrossMargin;
  }

  public getCurrency(): string {
    return this.currency;
  }

  public setCurrency(pcurrency: string) {
    this.currency = pcurrency;
  }

  public getTotal(): number {
    return parseFloat(this.grossMargin) + parseFloat(this.averageSalary);
  }

  public getGrossMarginPercentage(): number {
    return parseFloat(this.grossMargin) / this.getTotal();
  }
}
