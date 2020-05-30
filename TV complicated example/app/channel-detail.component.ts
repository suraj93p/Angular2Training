import { Component, Input } from '@angular/core';
import { Channel} from './channel';

@Component({
	selector : 'my-channel-detail',
	template: `
		<aside *ngIf="channel">
      		<h4>{{channel.name}} Description:</h4>
      		<div><label>id: </label>{{channel.id}}</div>
      		<div>
        		<label>name: </label>
        		<input [(ngModel)]="channel.name" placeholder="name"/>
      		</div>
    	</aside>
    	`
})
export class ChannelDetailComponent {
	@Input()
	channel: Channel;
}