import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { CourseCreator } from '../../../../Contexts/Mooc/Courses/application/CourseCreator';
import { Controller } from './Controller';

export class CoursePutController implements Controller {
  constructor(private courseCreator: CourseCreator) {

  }

  async run(req: Request, res: Response) {
    res.status(httpStatus.CREATED).send();
  }
}
