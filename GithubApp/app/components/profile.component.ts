import {Component} from '@angular/core';
import {GithubService} from '../services/github.service';
import 'rxjs/add/operator/map';

@Component({
    selector: 'profile',
    moduleId: module.id,
    templateUrl: 'profile.component.html',
    styleUrls: ['profile.component.css']
})

export class ProfileComponent {
     public _user = {};
    constructor(private _githubService:GithubService) {
        this._githubService.getUser().subscribe(user => {
             console.log(user);
             this._user = user;
        })
    }
}
