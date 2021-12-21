import { User } from '../../domain/User';
import { UserRepository } from '../../domain/UserRepository';
import fs from 'fs';
import { deserialize, serialize } from 'bson';

export class FileUserRepository implements UserRepository {
    private FILE_PATH = `${__dirname}/users`;

    async save(user: User) {
        fs.writeFileSync(this.filePath(user.id), serialize(user));
    }

    async search(userId: string) {
        const userData = await fs.promises.readFile(this.filePath(userId));
        const { id, mail, password, type } = deserialize(userData);
        return new User({ id, mail, password, type });
    }

    private filePath(id: string): string {
        console.log(this.FILE_PATH);
        return `${this.FILE_PATH}.${id}.repo`;
    }
}
