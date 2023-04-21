// wrap the React common header
// https://thalava.com/how-to-use-react-web-components-in-angular
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { Header } from "./Header";
const containerElementName = "reactHeaderComponentContainer";

/**
 * The Angular component that wraps the React common header.
 * This responds to the Angular events
 */
@Component({
  selector: "app-header-wrapper",
  template: `<div #${containerElementName}></div>`,
  // styleUrls: [''],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderWrapperComponent
  implements OnChanges, OnDestroy, AfterViewInit
{
  @ViewChild(containerElementName, { static: true }) containerRef!: ElementRef;
  @Input() appNotificationCounter: number = 0;

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changed');
    this.render();
  }
  
  ngAfterViewInit() {
    console.log('afterViewInit');
    this.render();
  }

  ngOnDestroy() {
    ReactDOM.unmountComponentAtNode(this.containerRef.nativeElement);
  }

  private render() {
    // note: I do get this warning from ngAfterViewInit and changed events
    // Warning: You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it.
    // I've decided to ignore it since the render is efficient
    //   If you call render on the same root more than once, React will update the DOM as necessary to reflect the latest JSX you passed. React will decide which parts of the DOM can be reused and which need to be recreated by “matching it up” with the previously rendered tree. Calling render on the same root again is similar to calling the set function on the root component: React avoids unnecessary DOM updates.
    //   see https://react.dev/learn/preserving-and-resetting-state
    // note: I attempted to avoid it in https://github.com/aligneddev/angular-plus-react/commit/8d39025cb099d0f5ca3ee9026bcefb5cd5e942ec, but updating didn't work so I reverted it
    // lesson: use the document.dispatchEvent to change values
    const root = createRoot(this.containerRef.nativeElement as HTMLElement);
    root.render(
      <React.StrictMode>
        <Header
          {...{
            headerComponents: [
              // without the ts-ignore, this won't compile
              /* @ts-ignore */
              <notification-web-component counter={this.appNotificationCounter}></notification-web-component>,
            ],
          }}
        />
      </React.StrictMode>
    );
  }
}
