export class PoloError extends Error {
    constructor(type: string, msg: string) {
        super(msg);
        this.name = type;
    }
    public throw(): void {
        console.error(this.message);
    }
}