import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-web-component';
  @Input() counter: number = 0;
  @Input() reactValue = '';
  inputValue = '';

  increment() {
    this.counter++;
  }

  onKey(event: any) {
    this.inputValue = event.target.value;
    document.dispatchEvent(new CustomEvent('angular-input-event', { detail: event.target.value }));
  }
}
