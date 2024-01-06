import { EResponseStatus } from "../constants/EResponseStatus";

export class StandartResponse<T> {
    public result: T[];
    public status: EResponseStatus;
    public message?: string;

    constructor(result: T[], status: EResponseStatus, message?: string ) {
        this.result = result;
        this.status = status;
        this.message = message
    }
}