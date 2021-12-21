import { UserCreator } from '../../../../../src/Contexts/Mooc/Users/application/UserCreator';
import { User } from '../../../../../src/Contexts/Mooc/Users/domain/User';
import { UserRepository } from '../../../../../src/Contexts/Mooc/Users/domain/UserRepository';
import { CourseRepositoryMock } from '../../Courses/__mocks__/CourseRepositoryMock';

describe('UserCreator', () => {
    it('should create valid user', async () => {
        const repository= new CourseRepositoryMock();
        const creator: UserCreator = new UserCreator(repository);
        const id = '1';
        const mail = 'prueba@gmail.com';
        const password = '1234';
        const type = 'usuario';
        const expectedUser = new User({ id, mail, password, type });

        await creator.run({ id, mail, password, type });

        expect(repository.save).toHaveBeenCalledWith(expectedUser);
    });
});
