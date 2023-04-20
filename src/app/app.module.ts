import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderWrapperComponent } from './header/header-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderWrapperComponent
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
    // const webComponent = createCustomElement(AppComponent, { injector: this.injector });
    // customElements.define('angular-web-component', webComponent);
  }

  ngDoBootstrap() { }
}