import { User } from '../../domain/User';
import { UserRepository } from '../../domain/UserRepository';

export class MySqlUserRepository implements UserRepository {
    constructor() {
    }
    get(UserName: string): User {
        throw new Error('Method not implemented.');
    }
    save(user: User): Promise<void> {
        throw new Error('Method not implemented.');
    }
}
