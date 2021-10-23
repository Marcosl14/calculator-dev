import { Request, Response } from 'express';
import Rate from '../../../domain/entities/rate.entity';
import rateRepository from '../../../infrastructure/repositories/rate.repository';

class FilterSalariesAction {
  run = async (req: Request, res: Response) => {
    const rates: Array<Rate> = await rateRepository.filterBy(
      req.body.technology,
      req.body.seniority,
      req.body.language,
      req.body.currency,
    );

    return res.status(200).json(rates);
  };
}

export default new FilterSalariesAction();
