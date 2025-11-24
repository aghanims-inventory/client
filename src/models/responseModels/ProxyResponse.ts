export default interface ProxyResponse<T = unknown> {
    data: T | null;
    statusCode: number;
    error: ProblemDetails | null;
}

interface ProblemDetails {
    type: string;
    title: string;
    status: number;
    detail: string;
    instance: string;
}