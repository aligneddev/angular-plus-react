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
    this.render();
  }

  ngAfterViewInit() {
    this.render();
  }

  ngOnDestroy() {
    ReactDOM.unmountComponentAtNode(this.containerRef.nativeElement);
  }

  private render() {
    const root = createRoot(this.containerRef.nativeElement as HTMLElement);
    root.render(
      <React.StrictMode>
        <Header
          {...{
            headerComponents: [
              // tsx won't let us use the web component here
              /* @ts-ignore */
              <notification-web-component counter={this.appNotificationCounter}></notification-web-component>,
            ],
          }}
        />
      </React.StrictMode>
    );
  }
}
