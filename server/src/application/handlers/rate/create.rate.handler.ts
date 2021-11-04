import Rate from '../../../domain/entities/rate.entity';
import LanguageEnum from '../../../domain/enums/language.enum';
import SeniorityEnum from '../../../domain/enums/seniority.enum';
import rateRepository from '../../../infrastructure/repositories/rate.repository';
import technologyRepository from '../../../infrastructure/repositories/technology.repository';
import { CreateRateCommand } from '../../commands/rate/create.rate.command';

class CreateRateHandler {
  async execute(command: CreateRateCommand) {
    const technology = await technologyRepository.findOneByName(command.getTechnology());

    if (!technology) {
      throw new Error('Technology not found');
    }

    const seniority = Object.values(SeniorityEnum).find(key => key == command.getSeniority().toUpperCase());
    if (!seniority) {
      throw new Error('Seniority not found');
    }

    const language = Object.values(LanguageEnum).find(key => key == command.getLanguage().toUpperCase());
    if (!language) {
      throw new Error('Language not found');
    }

    const rateExists: Boolean = await rateRepository.exists(technology, seniority, language, command.getCurrency());
    if (rateExists) {
      throw new Error('Rate already exists');
    }

    const rate: Rate = new Rate(
      technology,
      seniority,
      language,
      command.getAverageSalary(),
      command.getGrossMargin(),
      command.getCurrency(),
    );

    await rateRepository.save(rate);
  }
}

export default new CreateRateHandler();
