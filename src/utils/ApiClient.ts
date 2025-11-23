import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios';

class ApiClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: import.meta.env.VITE_BASE_API_URL as string,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
  }

  public async Get<ProxyResponse>(url: string, config?: AxiosRequestConfig): Promise<ProxyResponse> {
    const response = await this.client.get<ProxyResponse>(url, config);

    return response.data;
  }

  public async Post<ProxyResponse>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<ProxyResponse> {
    const response = await this.client.post<ProxyResponse>(url, data, config);

    return response.data;
  }
}

export default ApiClient;