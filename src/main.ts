import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { createRoot } from 'react-dom/client';
import { HeaderWrapperComponent } from './app/header/header-wrapper.component';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  // this is a way to avoid the 
  // Warning: You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it.
  // from @input changes
  // poll dom until this element is available
  function pollForHeader() {
    if (document.querySelector('app-header-wrapper')) {
      const header = document.querySelector('app-header-wrapper') as Element;
      const root = createRoot(header); 
      HeaderWrapperComponent.render(root);
    } else {
      setTimeout(pollForHeader, 100);
    }
  }
  pollForHeader();
