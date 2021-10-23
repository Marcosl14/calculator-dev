import Rate from '../../../domain/entities/rate.entity';
import rateRepository from '../../../infrastructure/repositories/rate.repository';
import { DeleteRateCommand } from '../../commands/rate/delete.rate.command';

class DeleteRateHandler {
  async execute(command: DeleteRateCommand) {
    const rate: Rate | null = await rateRepository.findOneById(command.getId());

    if (!rate) {
      throw new Error('Rate not found');
    }
    await rateRepository.deleteById(command.getId());
  }
}

export default new DeleteRateHandler();
