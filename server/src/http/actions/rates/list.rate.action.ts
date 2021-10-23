import { Request, Response } from 'express';
import Rate from '../../../domain/entities/rate.entity';
import rateRepository from '../../../infrastructure/repositories/rate.repository';

class ListRatesAction {
  async run(_req: Request, res: Response) {
    const rates: Rate[] = await rateRepository.findAll();

    return res.status(200).json(rates);
  }
}

export default new ListRatesAction();
