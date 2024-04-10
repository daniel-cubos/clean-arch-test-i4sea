/* eslint-disable @typescript-eslint/no-explicit-any */
import IHttpClient from "./IHttpClient";

export default class FetchAdapter implements IHttpClient {
  async get(url: string): Promise<any> {
    const response = await fetch(url);

    return await response.json();
  }
  async post(url: string, body: any): Promise<any> {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
    });

    return await response.json();
  }
  async put(url: string, body: any): Promise<any> {
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(body),
    });

    return await response.json();
  }
  async delete(url: string): Promise<any> {
    await fetch(url, {
      method: "DELETE",
    });
  }
}
