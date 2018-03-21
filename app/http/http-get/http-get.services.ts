// >> http-get-service
import { Injectable } from "@angular/core";
import { Observable as RxObservable } from "rxjs";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable()
export class MyHttpGetService {
    private serverUrl = "https://httpbin.org/get";

    constructor(private http: HttpClient) { }

    getData() {
        let headers = this.createRequestHeader();
        return this.http.get(this.serverUrl, { headers: headers })
            .pipe(map(res => res));
    }

    private createRequestHeader() {
        // set headers here e.g.
        let headers = new HttpHeaders({
            "AuthKey": "my-key",
            "AuthToken": "my-token",
            "Content-Type": "application/json",
         });

        return headers;
    }
}
// << http-get-service
