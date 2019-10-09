import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Room } from "../models/room";

@Injectable({
    providedIn: "root"
})
export class TalksService {
    constructor(private http: HttpClient) {}

    getTalks(room: number): Observable<Room> {
        return this.http.get<Room>(
            `https://demo.reativ.com/devsummit/?room=${room}`
        );
    }
}
