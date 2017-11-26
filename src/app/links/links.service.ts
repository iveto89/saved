import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class LinksService {

    constructor(private http: HttpClient) {

    }

    showLinks(userId = 1): Observable<any> {

        let url = 'http://127.0.0.1:8000/links';

        return Observable.create(observer => {
            return this.http.get(url).map(res => res).subscribe((result) => {
                observer.next(result);
                observer.complete();
            });
        });
    }
}