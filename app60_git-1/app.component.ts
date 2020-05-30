/*
a) @Component: use of  moduleId: module.id
b) view displays a simple info in the profile component.
 */


import {Component} from '@angular/core';
import {ProfileComponent} from './components/profile.component';

@Component({
    selector: 'my-app',
    moduleId: module.id,
    templateUrl: 'app.component.html',
    entryComponents:[ProfileComponent]
})
export class AppComponent {
    public projName = "MyGithub" ;
}
