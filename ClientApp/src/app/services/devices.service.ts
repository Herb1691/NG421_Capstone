import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDevices } from '../interfaces/idevices';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  constructor(
    private httpClient: HttpClient,
    @Inject('BASE_URL') private baseUrl: string
  ) { }

  async getDevices() {
    return this.httpClient.get<IDevices[]>(`${this.baseUrl}devices`).toPromise();
  }

  async addDevice( device: IDevices ) {
    return await this.httpClient.post<IDevices>(`${this.baseUrl}devices`, device).toPromise();
  }
}
