import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class LinkService {

    constructor(private http: HttpClient) {

    }

    createLink(link): Observable<any> {

        let url = 'http://127.0.0.1:8000/links';

        return Observable.create(observer => {
            return this.http
                    .post(url, link).map(res => res).subscribe((result) => {
                        observer.next(result);
                        observer.complete();
                    });
        });
    }

    updateLink(id, data): Observable<any> {
        let url = `http://127.0.0.1:8000/links/${id}`;

        return Observable.create(observer => {
            return this.http.put(url, data).map(res => res).subscribe((result) => {
                observer.next(result);
                observer.complete();
            });
        });
    }

    deleteLink(id): Observable<any> {
        let url = `http://127.0.0.1:8000/links/${id}`;

        return Observable.create(observer => {
            return this.http.delete(url).map(res => res).subscribe((result) => {
                observer.next(result);
                observer.complete();
            });
        });
    }
}