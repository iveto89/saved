import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class LinksService {

    constructor(private http: HttpClient) {

    }
    private api_url = environment.api_url;

    showLinks(userId = 1): Observable<any> {

        const url = `${this.api_url}/links`;

        return Observable.create(observer => {
            return this.http.get(url).map(res => res).subscribe((result) => {
                observer.next(result);
                observer.complete();
            });
        });
    }
}

