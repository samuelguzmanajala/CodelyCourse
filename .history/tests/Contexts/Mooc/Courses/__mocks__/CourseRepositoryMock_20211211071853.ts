import { CourseRepository } from '../../../../../src/Contexts/Mooc/Courses/domain/CourseRepository';
import { Course } from '../../../../../src/Contexts/Mooc/Courses/domain/Course';

export class CourseRepositoryMock implements CourseRepository {
  saveMock: jest.Mock;

  constructor() {
    this.saveMock = jest.fn();
  }

  async save(course: Course) {
    this.saveMock(course);
  }

  assertLastSavedCourseIs(course: Course): Promise<void> {
    this.saveMock(course);
  }

}