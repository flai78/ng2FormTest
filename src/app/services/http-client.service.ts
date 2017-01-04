

import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class HttpClient {

    constructor(private http: Http) { }

    private extractData<T>(res: Response):T{
        
        let body:T = res.json();
        return body;
    }

    private handleError(err: any){
        console.log('Error: ', err);
        return Observable.throw(err.statusText);
    }



    post<T>(url: string, data: any): Observable<T> {

        let body = JSON.stringify(data);
        let headers = new Headers({'Content-Type' : 'application/json'});
        let options = new RequestOptions({headers : headers});

        console.log('post: ', data)

        return this.http.post(url,body,options)
                        .map(this.extractData)
                        .catch(this.handleError);
    }


      get<T>(url: string): Observable<T> {

        
        let headers = new Headers({'Content-Type' : 'application/json'});
        let options = new RequestOptions({headers : headers});

        console.log('get: ', url)

        return this.http.get(url)
                        .map(this.extractData)
                        .catch(this.handleError);
    }

} 