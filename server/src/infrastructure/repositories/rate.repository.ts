import Rate from '../../domain/entities/rate.entity';
import Technology from '../../domain/entities/technology.entity';
import LanguageEnum from '../../domain/enums/language.enum';
import SeniorityEnum from '../../domain/enums/seniority.enum';
import searchMethodInterfase from '../../domain/interfaces/search.method.interface';
import { ratesModel } from '../../index';
import technologyRepository from './technology.repository';

class RateRepository {
  async findAll(): Promise<Rate[]> {
    return ratesModel.find({});
  }

  async findOneById(id: string): Promise<any | null> {
    return ratesModel.findById(id);
  }

  async filterBy(technologyName: string, seniority: string, language: string, currency: string): Promise<Rate[]> {
    const search: searchMethodInterfase = {
      technology: null,
      seniority: null,
      language: null,
      currency: null,
    };
    if (technologyName) {
      const technology = await technologyRepository.findOneByName(technologyName.toUpperCase());
      search.technology = technology;
    } else {
      delete search.technology;
    }
    if (seniority) {
      search.seniority = seniority.toUpperCase();
    } else {
      delete search.seniority;
    }
    if (language) {
      search.language = language.toUpperCase();
    } else {
      delete search.language;
    }
    if (currency) {
      search.currency = currency.toUpperCase();
    } else {
      delete search.currency;
    }
    return ratesModel.find(search);
  }

  async exists(
    technology: Technology,
    seniority: SeniorityEnum,
    language: LanguageEnum,
    currency: string,
  ): Promise<boolean> {
    return ratesModel.exists({ technology, seniority, language, currency });
  }

  async save(rate: Rate): Promise<void> {
    ratesModel.collection
      .insertOne({
        technology: rate.getTechnology(),
        seniority: rate.getSeniority(),
        language: rate.getLanguage(),
        averageSalary: rate.getAverageSalary(),
        grossMargin: rate.getGrossMargin(),
        currency: rate.getCurrency(),
      })
      .catch(error => console.error(error));
  }

  async update(id: string, rate: Rate): Promise<void> {
    await ratesModel.findOneAndUpdate(
      { id },
      { averageSalary: rate.getAverageSalary(), grossMargin: rate.getGrossMargin() },
    );
  }

  async deleteById(id: string): Promise<void> {
    await ratesModel.findByIdAndDelete(id);
  }
}

export default new RateRepository();
