import { UUID } from 'bson';
import { CourseCreator } from '../../../../../src/Contexts/Mooc/Courses/application/CourseCreator';
import { Course } from '../../../../../src/Contexts/Mooc/Courses/domain/Course';
import { CourseRepositoryMock } from '../__mocks__/CourseRepositoryMock';

let repository: CourseRepositoryMock;
let creator: CourseCreator;

beforeEach(() => {
  repository = new CourseRepositoryMock();
  creator = new CourseCreator(repository);
});

describe('CourseCreator', () => {
  it('should create a valid course', async () => {

    const id = new UUID('07666c602-d4d4-');
    const name = 'some-name';
    const duration = 'some-duration';

    const expectedCourse = new Course({ id, name, duration });

    await creator.run({id, name, duration});
    repository.assertSaveHaveBeenCalledWith(expectedCourse);
    repository.assertLastSavedCourseIs(expectedCourse);
  });
});