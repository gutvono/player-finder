import { Observable } from "rxjs";
import { IResponse } from "./model/IResponse";

export interface IGetProfileService {
    getProfile(steamid: string): Observable<IResponse>;
}