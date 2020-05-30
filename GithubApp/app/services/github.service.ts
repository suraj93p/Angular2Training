/**
 * Created by spasayat on 12/8/2016.
 */
import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
    private username: string; // Github Username

    constructor(private http:Http){
        this.username = 'karan';
    }

    getUser(){
        return this.http.get('https://www.omdbapi.com/?t=the%20social%20network')
            .map(res => res.json());
    }
}
