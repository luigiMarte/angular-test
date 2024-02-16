import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'AngIntro';
  fromParent = 'Message from parent';

  changeString(){
    this.fromParent = "message changed"
  }
}
