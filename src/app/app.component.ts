import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-web-component';
  @Input() counter: number = 0;
  @Input() reactValue = '';
  inputValue = '';

  increment() {
    this.counter++;
  }

  appNotificationCounter = 0;
  notification(event: any) {
    this.appNotificationCounter++;
    document.dispatchEvent(
      new CustomEvent('notification-added', { detail: this.appNotificationCounter })
    );
  }
}
