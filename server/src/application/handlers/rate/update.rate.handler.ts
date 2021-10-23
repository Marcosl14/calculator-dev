import Rate from '../../../domain/entities/rate.entity';
import rateRepository from '../../../infrastructure/repositories/rate.repository';
import { UpdateRateCommand } from '../../commands/rate/update.rate.command';

class UpdateRateHandler {
  async execute(command: UpdateRateCommand) {
    const rate: Rate | null = await rateRepository.findOneById(command.getId());

    if (!rate) {
      throw new Error('Rate not found');
    }

    rate.setAverageSalary(command.getAverageSalary());
    rate.setGrossMargin(command.getGrossMargin());

    await rateRepository.save(rate);
  }
}

export default new UpdateRateHandler();
