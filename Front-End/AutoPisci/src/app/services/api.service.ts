import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = "https://iot-fgfatec.herokuapp.com"

  constructor(private http: HttpClient) {}

  async sendMessage(message) {
    this.http.get(`${this.baseUrl}/send?message=${message}`)
      .subscribe(x => console.log(x))
  }
}
