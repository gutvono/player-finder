import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IResponse } from './interfaces/model/IResponse';
import { IGetProfileService } from './interfaces/IGetProfileService';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetProfileService implements IGetProfileService {
  private baseUrl =
    'http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/';
  private apiKey = 'FE55C13A46BF01A4A9E4221CBA127529';
  private steamId = '';

  constructor(private http: HttpClient) {}

  get url() {
    return `${this.baseUrl}?key=${this.apiKey}&steamids=${this.steamId}`;
  }

  getProfile(id: string): Observable<IResponse> {
    this.steamId = id;
    return this.http.get<IResponse>(this.url);
  }
}
