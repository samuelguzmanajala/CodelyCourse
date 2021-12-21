import { Course } from '../domain/Course';
import { CourseRepository } from '../domain/CourseRepository';
import { CourseCreatorRequest } from './CourseCreatorRequest';

export class CourseCreator {
  private repository: CourseRepository;

  constructor(repository: CourseRepository) {
    this.repository = repository;
  }

  async run(request:CourseCreatorRequest):Promise<void> {
    const course = new Course({id: request.id, name: request.name, durationrequest.duration});

    return this.repository.save(course);
  }
}
