class ProxyResponse<T = unknown> {
    public data: T | null;
    public statusCode: number;
    public error: ProblemDetails | null;

    constructor(data: T | null, statusCode: number, error: ProblemDetails | null) {
        this.data = data;
        this.statusCode = statusCode;
        this.error = error;
    }
}

class ProblemDetails {
    public type: string;
    public title: string;
    public status: number;
    public detail: string;
    public instance: string;

    constructor(type: string, title: string, status: number, detail: string, instance: string) {
        this.type = type;
        this.title = title;
        this.status = status;
        this.detail = detail;
        this.instance = instance;
    }
}

export default ProxyResponse