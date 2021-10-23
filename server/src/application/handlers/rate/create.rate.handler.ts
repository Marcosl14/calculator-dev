import Rate from '../../../domain/entities/rate.entity';
import rateRepository from '../../../infrastructure/repositories/rate.repository';
import technologyRepository from '../../../infrastructure/repositories/technology.repository';
import { CreateRateCommand } from '../../commands/rate/create.rate.command';

class CreateRateHandler {
  async execute(command: CreateRateCommand) {
    const technology = await technologyRepository.findOneById(command.getTechnology());

    if (!technology) {
      throw new Error('Technology not found');
    }

    const rateExists: Boolean = await rateRepository.exists(
      technology,
      command.getSeniority(),
      command.getLanguage(),
      command.getCurrency(),
    );

    if (rateExists) {
      throw new Error('Rate already exists');
    }

    const rate: Rate = new Rate(
      technology,
      command.getSeniority(),
      command.getLanguage(),
      command.getAverageSalary(),
      command.getGrossMargin(),
      command.getCurrency(),
    );

    await rateRepository.save(rate);
  }
}

export default new CreateRateHandler();
