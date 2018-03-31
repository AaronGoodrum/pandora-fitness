export class User {

    id: number;
    email: string;
    password: {
        pwd: string;
    };
    birthdate: Date;
    terms: boolean;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
