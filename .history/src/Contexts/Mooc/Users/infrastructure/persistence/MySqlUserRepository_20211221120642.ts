import { User } from '../../domain/User';
import { UserRepository } from '../../domain/UserRepository';

export class MySqlUserRepository implements UserRepository {
    constructor() {
    }
    save(user: User): Promise<void> {
        throw new Error('Method not implemented.');
    }
    async search(userId: string) {
        const userData = await fs.promises.readFile(this.filePath(userId));
        const { id, mail, password, type } = deserialize(userData);
        return new User({ id, mail, password, type });
    }
}
