import Rate from '../../../domain/entities/rate.entity';
import rateRepository from '../../../infrastructure/repositories/rate.repository';
import { UpdateRateCommand } from '../../commands/rate/update.rate.command';

class UpdateRateHandler {
  async execute(command: UpdateRateCommand) {
    let dbRate: any | null = await rateRepository.findOneById(command.getId());

    if (!dbRate) {
      throw new Error('Rate not found');
    }

    const rate = new Rate(
      dbRate.technology,
      dbRate.seniority,
      dbRate.language,
      dbRate.averageSalary,
      dbRate.grossMargin,
      dbRate.currency,
    );

    rate.setAverageSalary(command.getAverageSalary());
    rate.setGrossMargin(command.getGrossMargin());

    await rateRepository.update(command.getId(), rate);
  }
}

export default new UpdateRateHandler();
