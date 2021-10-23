import { Request, Response } from 'express';
import { UpdateRateCommand } from '../../../application/commands/rate/update.rate.command';
import UpdateRateHandler from '../../../application/handlers/rate/update.rate.handler';

class UpdateRateAction {
  run = async (req: Request, res: Response) => {
    const command: UpdateRateCommand = this.adapt(req);

    if (!command.getGrossMargin() || !command.getAverageSalary()) {
      return res.status(400).json({ message: 'Parameter missing' });
    }

    try {
      await UpdateRateHandler.execute(command);
    } catch (error: any) {
      return res.status(404).json({ message: error.message });
    }

    return res.status(200).json({ message: 'Rate updated' });
  };

  private adapt(request: Request): UpdateRateCommand {
    return new UpdateRateCommand(request.params.id, request.body.averageSalary, request.body.grossMargin);
  }
}

export default new UpdateRateAction();
