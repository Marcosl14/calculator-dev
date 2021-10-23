import shortid from 'shortid';
import Rate from '../../domain/entities/rate.entity';
import Technology from '../../domain/entities/technology.entity';
import LanguageEnum from '../../domain/enums/language.enum';
import SeniorityEnum from '../../domain/enums/seniority.enum';

class RateRepository {
  private rates: Rate[];

  constructor() {
    this.rates = [];
  }

  async findOneById(id: string): Promise<Rate | null> {
    const rate = this.rates.find(r => r.getId() === id);
    return rate ? rate : null;
  }

  async findAll(): Promise<Rate[]> {
    return this.rates;
  }

  async exists(
    technology: Technology,
    seniority: SeniorityEnum,
    language: LanguageEnum,
    currency: string,
  ): Promise<boolean> {
    const rate = this.rates.find(
      r =>
        r.getTechnology() == technology &&
        r.getSeniority() == seniority &&
        r.getLanguage() == language &&
        r.getCurrency() == currency,
    );
    if (rate) {
      return true;
    }
    return false;
  }

  async save(rate: Rate): Promise<void> {
    if (!rate.getId()) {
      rate.setId(shortid.generate());
      this.rates.push(rate);
    } else {
      this.rates = this.rates.map(function (r) {
        return r.getId() === rate.getId() ? rate : r;
      });
    }
  }

  async deleteById(id: string): Promise<void> {
    this.rates = this.rates.filter(r => r.getId() !== id);
  }
}

export default new RateRepository();