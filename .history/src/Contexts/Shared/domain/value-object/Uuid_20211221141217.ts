import validate from 'uuid-validate';
import { InvalidArgumentError } from '.InvalidArgumentError'; 
export class Uuid {
    constructor(value: string) {
        this.ensureIsValidUuid(value);
    }
    private ensureIsValidUuid(id: string)

}
