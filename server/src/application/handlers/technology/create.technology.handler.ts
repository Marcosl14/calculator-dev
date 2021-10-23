import Technology from '../../../domain/entities/technology.entity';
import technologyRepository from '../../../infrastructure/repositories/technology.repository';
import { CreateTechnologyCommand } from '../../commands/technology/create.technology.command';

class CreateTechnologyHandler {
  async execute(command: CreateTechnologyCommand) {
    const technologyExists: Boolean = await technologyRepository.exists(command.getName());
    if (technologyExists) {
      throw new Error('Technology already exists');
    }

    const technology: Technology = new Technology(command.getName());

    await technologyRepository.save(technology);
  }
}

export default new CreateTechnologyHandler();
