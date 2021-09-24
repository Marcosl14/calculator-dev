import shortId from 'shortid';
import Technology from './technology.entity';
import LanguageEnum from '../enums/language.enum';
import SeniorityEnum from '../enums/seniority.enum';

class Rate {
  private _id: string;
  private _technology: Technology;
  private _seniority: SeniorityEnum;
  private _languaje: LanguageEnum;
  private _averageSalary: string;
  private _grossMargin: string;
  private _currency: string;

  constructor(
    technology: Technology,
    seniority: SeniorityEnum,
    languaje: LanguageEnum,
    averageSalary: string,
    grossMargin: string,
    currency: string,
  ) {
    this._id = shortId.generate();
    this._technology = technology;
    this._seniority = seniority;
    this._languaje = languaje;
    this._averageSalary = averageSalary;
    this._grossMargin = grossMargin;
    this._currency = currency;
  }

  public get id(): string {
    return this._id;
  }

  public set id(pid: string) {
    this._id = pid;
  }

  public get technology(): Technology {
    return this._technology;
  }

  public set technology(ptechnology: Technology) {
    this._technology = ptechnology;
  }

  public get seniority(): SeniorityEnum {
    return this._seniority;
  }

  public set seniority(pseniority: SeniorityEnum) {
    this._seniority = pseniority;
  }

  public get languaje(): LanguageEnum {
    return this._languaje;
  }

  public set languaje(planguaje: LanguageEnum) {
    this._languaje = planguaje;
  }

  public get averageSalary(): string {
    return this._averageSalary;
  }

  public set averageSalary(paverageSalary: string) {
    this._averageSalary = paverageSalary;
  }

  public get grossMargin(): string {
    return this._grossMargin;
  }

  public set grossMargin(pgrossMargin: string) {
    this._grossMargin = pgrossMargin;
  }

  public get currency(): string {
    return this._currency;
  }

  public set currency(pcurrency: string) {
    this._currency = pcurrency;
  }

  public getTotal(): number {
    return parseFloat(this._grossMargin) + parseFloat(this._averageSalary);
  }

  public getGrossMarginPercentage(): number {
    return parseFloat(this._grossMargin) / this.getTotal();
  }
}
export default Rate;
