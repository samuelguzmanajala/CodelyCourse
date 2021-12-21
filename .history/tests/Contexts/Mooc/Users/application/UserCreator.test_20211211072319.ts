import { UserCreator } from '../../../../../src/Contexts/Mooc/Users/application/UserCreator';
import { User } from '../../../../../src/Contexts/Mooc/Users/domain/User';
import { UserRepository } from '../../../../../src/Contexts/Mooc/Users/domain/UserRepository';


describe('UserCreator', () => {
    it('should create valid user', async () => {
        const repository: UserRepository = {
            save: jest.fn()
        };
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
