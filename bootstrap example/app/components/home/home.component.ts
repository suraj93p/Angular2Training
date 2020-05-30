/**
 * Created by spasayat on 12/8/2016.
 */
import { Component } from '@angular/core';

@Component ({
    selector: 'my-app',
    // moduleId: module.id,
    template: `
            <h3>Home</h3>
            <hr>
            Welcome to the Home Page. <br><br>
            <aside>
                <img src="//c3.staticflickr.com/6/5582/14987435882_d72b77296d_b.jpg">
             </aside>
          `,
    styles:[`
        img {height: 14em; width: 14em; margin-left: 10em;}
       
          `]
})
export class HomeComponent {}
