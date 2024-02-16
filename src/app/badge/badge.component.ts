import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent {
  @Input() text: string = '';
  @Input() backgroundColor: string = '#007bff';
  @Input() textColor: string = '#ffffff';

  get badgeStyles() {
    return {
      'background-color': this.backgroundColor,
      color: this.textColor,
    };
  }
}







