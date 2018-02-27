import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {environment} from '../../environments/environment';

@Injectable()
export class LinkService {

    constructor(private http: HttpClient) {

    }
    private api_url = environment.api_url;

    createLink(link): Observable<any> {


        const url = `${this.api_url}/links`;

        return Observable.create(observer => {
            return this.http
                    .post(url, link).map(res => res).subscribe((result) => {
                        observer.next(result);
                        observer.complete();
                    });
        });
    }

    updateLink(id, data): Observable<any> {
        const url = `${this.api_url}/links/${id}`;

        return Observable.create(observer => {
            return this.http.put(url, data).map(res => res).subscribe((result) => {
                observer.next(result);
                observer.complete();
            });
        });
    }

    deleteLink(id): Observable<any> {
        const url = `${this.api_url}/links/${id}`;

        return Observable.create(observer => {
            return this.http.delete(url).map(res => res).subscribe((result) => {
                observer.next(result);
                observer.complete();
            });
        });
    }
}
