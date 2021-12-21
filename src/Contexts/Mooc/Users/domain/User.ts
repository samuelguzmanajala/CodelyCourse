export class User {
    readonly id;
    readonly mail;
    readonly password;
    readonly type;

    constructor(params: { id: string, mail: string, password: string, type: string }) {
        this.id = params.id;
        this.mail = params.mail;
        this.password = params.password;
        this.type = params.type;
    }
}
