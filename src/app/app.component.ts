import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SWITCHY';
    switches=[true,false,true,false,true,false];
    flipSwitch(x){
        this.switches[x]=!this.switches[x];
    }
}
