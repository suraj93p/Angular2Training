import { Component } from '@angular/core';

import { Channel } from './channel';
import { ChannelDetailComponent } from './channel-detail.component';

const CHANNELS: Channel[] = [
  { "id": 11, "name": "Zee News" },
  { "id": 12, "name": "Zee Business" },
  { "id": 13, "name": "Sony" },
  { "id": 14, "name": "ETV Raj" },
  { "id": 15, "name": "Colors" },
  { "id": 16, "name": "ET Now" },
  { "id": 17, "name": "Bloomberg" },
  { "id": 18, "name": "BBC" },
  { "id": 19, "name": "CNN" },
  { "id": 20, "name": "Nat Geo" }
];


@Component({
  selector: 'my-app',
  template: `
       <h2 id="hdr">{{title}}</h2>
      <h5>My TV Channels</h5>
      <section>
        <ul class="favs">
          <li *ngFor=" let channel of channels"
                [class.selected]="channel === selectedChannel"
                 (click)="onSelect(channel)">
       
            <span class="badge">{{channel.id}}</span> {{channel.name}}
          </li>
        </ul>
      </section>
      
      <aside> Info Panel: 
          <my-channel-detail  [channel]="selectedChannel"></my-channel-detail>
       </aside>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    
    #hdr{color: #8b3b4f;}
    section, aside{margin-right: 5em; float: left;}
    aside, #chn{border: 1px solid blue; padding: 1.2em;}
    
    
    .favs {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .favs li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: lightseagreen;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .favs li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .favs li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .favs .text {
      position: relative;
      top: -3px;
    }
    .favs .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `],
  entryComponents: [ ChannelDetailComponent]
})

export class AppComponent {
  title = "Tata Sky: Popular TV Channels";
  channels = CHANNELS;
  selectedChannel: Channel;
  onSelect(channel: Channel) { this.selectedChannel = channel; console.log(channel); }
}
