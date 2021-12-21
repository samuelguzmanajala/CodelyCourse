import { Course } from '../domain/Course';
import { CourseRepository } from '../domain/CourseRepository';
import { COurseCreatorRequest } from './CourseCreatorRequest';

export class CourseCreator {
  private repository: CourseRepository;

  constructor(repository: CourseRepository) {
    this.repository = repository;
  }

  async run(Request:COurseCreatorRequest) {
    const course = new Course(request.id);

    return this.repository.save(course);
  }
}
