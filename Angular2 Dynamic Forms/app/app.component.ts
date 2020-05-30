import { Component } from '@angular/core';

import { FormComponent} from './components/form/form.component'

@Component({
    selector: 'my-app',
    moduleId: module.id,
    templateUrl: "app.component.html",
    styleUrls : ["app.component.css"],
    entryComponents: [FormComponent]
})


export class AppComponent {

}

