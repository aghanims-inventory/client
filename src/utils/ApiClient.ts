import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios';
import type ProxyResponse from '../models/responseModels/ProxyResponse';

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

  public async get<T>(url: string, config?: AxiosRequestConfig): Promise<ProxyResponse<T>> {
    const response = await this.client.get<ProxyResponse<T>>(url, config);

    return response.data;
  }

  public async post<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<ProxyResponse<T>> {
    const response = await this.client.post<ProxyResponse<T>>(url, data, config);

    return response.data;
  }
}

export default ApiClient;