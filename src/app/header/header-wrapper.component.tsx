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
import { Root, createRoot } from "react-dom/client";
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
    // note: It works, but I get this warning from changed events (from the @Input update approach)
    // Warning: You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it.
    // I've decided to ignore it since the render is efficient
    //   If you call render on the same root more than once, React will update the DOM as necessary to reflect the latest JSX you passed. React will decide which parts of the DOM can be reused and which need to be recreated by “matching it up” with the previously rendered tree. Calling render on the same root again is similar to calling the set function on the root component: React avoids unnecessary DOM updates.
    //   see https://react.dev/learn/preserving-and-resetting-state
    // these can be avoided by using the document.addEventListener approach
    // it is also avoided with calling createRoot in the main.ts file
    console.log("changed");
    HeaderWrapperComponent.render(undefined);
  }

  ngAfterViewInit() {
    console.log("afterViewInit");
    HeaderWrapperComponent.render(undefined);
  }

  ngOnDestroy() {
    ReactDOM.unmountComponentAtNode(this.containerRef.nativeElement);
  }

  static reactHeaderRoot: Root;
  public static render(reactHeaderRoot: Root | undefined) {
    // set in main.ts
    if (reactHeaderRoot) HeaderWrapperComponent.reactHeaderRoot = reactHeaderRoot;
    if (HeaderWrapperComponent.reactHeaderRoot)
      HeaderWrapperComponent.reactHeaderRoot.render(
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
