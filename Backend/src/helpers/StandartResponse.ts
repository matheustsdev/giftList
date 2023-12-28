import { EResponseStatus } from "src/constants/EResponseStatus";

export class StandartResponse {
    public result: any[];
    public status: EResponseStatus;
    public message?: string;

    constructor(result: any[], status: EResponseStatus, message?: string ) {
        this.result = result;
        this.status = status;
        this.message = message
    }
}