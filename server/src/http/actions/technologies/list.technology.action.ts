import { Request, Response } from 'express';
import Technology from '../../../domain/entities/technology.entity';
import technologyRepository from '../../../infrastructure/repositories/technology.repository';

class ListTechnologyAction {
  async run(_req: Request, res: Response) {
    const rates: Technology[] = await technologyRepository.findAll();

    return res.status(200).json(rates);
  }
}

export default new ListTechnologyAction();
