import rateRepository from '../../../infrastructure/repositories/rate.repository';
import { DeleteRateCommand } from '../../commands/rate/delete.rate.command';

class DeleteRateHandler {
  async execute(command: DeleteRateCommand) {
    try {
      await rateRepository.deleteById(command.getId());
    } catch {
      throw new Error('Rate not found');
    }
  }
}

export default new DeleteRateHandler();
