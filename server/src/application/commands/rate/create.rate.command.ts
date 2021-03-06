import LanguageEnum from '../../../domain/enums/language.enum';
import SeniorityEnum from '../../../domain/enums/seniority.enum';

export class CreateRateCommand {
  private technologyName: string;
  private seniority: SeniorityEnum;
  private language: LanguageEnum;
  private averageSalary: string;
  private grossMargin: string;
  private currency: string;

  constructor(
    pTechnologyId: string,
    pSeniority: SeniorityEnum,
    pLanguage: LanguageEnum,
    pAverageSalary: string,
    pGrossMargin: string,
    pCurrency: string,
  ) {
    this.technologyName = pTechnologyId.toUpperCase();
    this.seniority = pSeniority;
    this.language = pLanguage;
    this.averageSalary = Number(pAverageSalary).toFixed(2);
    this.grossMargin = Number(pGrossMargin).toFixed(2);
    this.currency = pCurrency.toUpperCase();
  }

  public getTechnology() {
    return this.technologyName;
  }
  public getSeniority() {
    return this.seniority;
  }
  public getLanguage() {
    return this.language;
  }
  public getAverageSalary() {
    return this.averageSalary;
  }
  public getGrossMargin() {
    return this.grossMargin;
  }
  public getCurrency() {
    return this.currency;
  }
}
