import { Request, Response } from 'express';
import { DeleteRateCommand } from '../../../application/commands/rate/delete.rate.command';
import DeleteRateHandler from '../../../application/handlers/rate/delete.rate.handler';

class DeleteRateAction {
  run = async (req: Request, res: Response) => {
    const command: DeleteRateCommand = new DeleteRateCommand(req.params.id);

    try {
      await DeleteRateHandler.execute(command);
    } catch (error: any) {
      return res.status(404).json({ message: error.message });
    }

    return res.status(204).send();
  };
}

export default new DeleteRateAction();
