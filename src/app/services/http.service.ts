import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { env } from "../environment";

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    constructor(private http: HttpClient) {}

    public getAirline(name: string, icao = "", iata = "") {
        return this.http.get(env.AIRLINES_API_URL, {
            headers: {
                'X-Api-Key': env.AIRLINES_AIRCRAFT_API_KEY
            },
            params: {
                'name': name,
                'icao': icao,
                'iata': iata
            }
        })
    }
}