/**
 * Created by spasayat on 12/7/2016.
 */
import {Component,Input } from '@angular/core'

@Component({
    selector: "form-component",
    moduleId: module.id,
    templateUrl: "form.html",
    styleUrls: ["form.css"]
})

export class FormComponent {

    value: any;

    submit(form: any) {
        this.value = form;
        console.log("form: ", form);
    }
}