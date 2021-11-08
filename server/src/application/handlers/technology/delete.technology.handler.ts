import { ObjectId } from 'bson';
import Rate from '../../../domain/entities/rate.entity';
import Technology from '../../../domain/entities/technology.entity';
import rateRepository from '../../../infrastructure/repositories/rate.repository';
import TechnologyRepository from '../../../infrastructure/repositories/technology.repository';
import { DeleteTechnologyCommand } from '../../commands/technology/delete.technology.command';

class DeleteTechnologyHandler {
  async execute(command: DeleteTechnologyCommand) {
    const technology: Technology | null = await TechnologyRepository.findOneById(command.getId());

    if (!technology) {
      throw new Error('Technology not found');
    }

    const rates: any[] = await rateRepository.filterBy(command.getId());
    rates.forEach(rateDb => {
      const rate = new Rate(
        rateDb.technology,
        rateDb.seniority,
        rateDb.language,
        rateDb.averageSalary,
        rateDb.grossMargin,
        rateDb.currency,
      );
      rate.setId(new ObjectId(rateDb._id).toString());
      rateRepository.deleteById(rate.getId());
    });

    await TechnologyRepository.deleteById(command.getId());
  }
}

export default new DeleteTechnologyHandler();
