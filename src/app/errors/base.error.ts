export abstract class BaseError {

    private message: string;

    constructor(message?: string) {
        this.message = message;
    }
}