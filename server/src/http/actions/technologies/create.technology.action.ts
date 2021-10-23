import { Request, Response } from 'express';
import { CreateTechnologyCommand } from '../../../application/commands/technology/create.technology.command';
import CreateTechnologyHandler from '../../../application/handlers/technology/create.technology.handler';

class createTechnologyAction {
  run = async (req: Request, res: Response) => {
    const command: CreateTechnologyCommand = new CreateTechnologyCommand(req.body.name);

    if (!command.getName()) {
      return res.status(400).json({ message: 'Name missing' });
    }

    try {
      await CreateTechnologyHandler.execute(command);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }

    return res.status(201).json({ message: 'Technology created' });
  };
}

export default new createTechnologyAction();
