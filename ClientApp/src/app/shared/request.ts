﻿export class Request {
 
    mail: string;
    password: string;
    constructor(input?: any) {
        Object.assign(this, input);
    }
}
