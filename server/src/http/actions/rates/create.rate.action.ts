import { Request, Response } from 'express';
import { CreateRateCommand } from '../../../application/commands/rate/create.rate.command';
import CreateRateHandler from '../../../application/handlers/rate/create.rate.handler';

class createRateAction {
  run = async (req: Request, res: Response) => {
    const command: CreateRateCommand = this.adapt(req);

    if (
      !command.getTechnology() ||
      !command.getSeniority() ||
      !command.getLanguage() ||
      !command.getGrossMargin() ||
      !command.getCurrency() ||
      !command.getAverageSalary()
    ) {
      return res.status(400).json({ message: 'Parameter missing' });
    }

    try {
      await CreateRateHandler.execute(command);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }

    return res.status(201).json({ message: 'Rate created' });
  };

  private adapt(request: Request): CreateRateCommand {
    return new CreateRateCommand(
      request.body.technology,
      request.body.seniority.toUpperCase(),
      request.body.language.toUpperCase(),
      request.body.averageSalary,
      request.body.grossMargin,
      request.body.currency.toUpperCase(),
    );
  }
}

export default new createRateAction();
