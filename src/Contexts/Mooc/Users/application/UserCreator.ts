import { User } from '../domain/User';
import { UserRepository } from '../domain/UserRepository';

export class UserCreator {
    private repository: UserRepository;

    constructor(repository: UserRepository) {
        this.repository = repository;
    }

    async run(params: { id: string, mail: string, password: string, type: string }) {
        const user = new User(params);
        return this.repository.save(user);
    }
}
