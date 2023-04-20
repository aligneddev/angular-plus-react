import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderWrapperComponent } from './header/header-wrapper.component';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderWrapperComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    // turn NotificationComponent into a web component for use in React
    const notificationComponent = createCustomElement(NotificationComponent, { injector: this.injector });
    customElements.define('notification-web-component', notificationComponent);
  }

  ngDoBootstrap() { }
}