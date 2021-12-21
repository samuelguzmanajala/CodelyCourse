import { Controller } from './Controller';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { NoteCreator } from '../../../../Contexts/Mooc/Notes/application/NoteCreator';

type NotePutRequest = Request & {
  body: {
    id: string;
    name: string;
    duration: string;
  };
};
export class NotePutController implements Controller {
  constructor(private nCreator: NoteCreator) { }

  async run(req: NotePutRequest, res: Response) {
    try {
      const { id, name, duration } = req.body;
      await this.nCreator.run(id, name, duration);
      res.status(httpStatus.CREATED).send();
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send();
    }
  }
}
