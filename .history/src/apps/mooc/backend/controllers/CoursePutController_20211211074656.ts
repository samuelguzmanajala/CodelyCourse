import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from './Controller';

export class CoursePutController implements Controller {
  constructor(private courseCreator) {}

  async run(req: Request, res: Response) {
    res.status(httpStatus.CREATED).send();
  }
}
