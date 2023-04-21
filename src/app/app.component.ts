import { Component, Input } from '@angular/core';
import { EventListenerKeys } from './header/Header';

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
  textToReact = '';

  increment() {
    this.counter++;
  }

  appNotificationCounter = 0;
  notification(event: any) {
    // I'm using Angular binding with that @Input
    this.appNotificationCounter++;

  }
  
  textToReactKeyUp(event: Event) {
    // in https://github.com/MachineLlama/multi-app
    // the dispatchEvent is used to send data to React
    // look for the corresponding  document.addEventListener('send-data-to-react', (e) => {
    this.textToReact = (event.target as HTMLInputElement).value;
    document.dispatchEvent(
      new CustomEvent(EventListenerKeys.sendDataToReact, { detail: this.textToReact })
    );
  }
}
