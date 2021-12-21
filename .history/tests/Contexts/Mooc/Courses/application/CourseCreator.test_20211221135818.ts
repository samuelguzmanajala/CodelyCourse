import { CourseCreator } from '../../../../../src/Contexts/Mooc/Courses/application/CourseCreator';
import { Course } from '../../../../../src/Contexts/Mooc/Courses/domain/Course';
import { CourseRepositoryMock } from '../__mocks__/CourseRepositoryMock';
import {} from '../'

let repository: CourseRepositoryMock;
let creator: CourseCreator;

beforeEach(() => {
  repository = new CourseRepositoryMock();
  creator = new CourseCreator(repository);
});

describe('CourseCreator', () => {
  it('should create a valid course', async () => {

    const id = new Uuid('07666c602-d4d4-48b6-9d50-d325');
    const name = 'some-name';
    const duration = 'some-duration';

    const expectedCourse = new Course({ id, name, duration });

    await creator.run({id, name, duration});
    repository.assertSaveHaveBeenCalledWith(expectedCourse);
    repository.assertLastSavedCourseIs(expectedCourse);
  });
});
