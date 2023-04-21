import React, { ReactElement, ReactNode, useState } from "react";

export class EventListenerKeys { static sendDataToReact = "send-data-to-react"; }
export type HeaderPropsForComponent = {
  headerComponents: ReactElement[];
};

export const Header: React.FC<HeaderPropsForComponent> = (
  props: HeaderPropsForComponent
) => {
  const [angularInputValue, setAngularInputValue] = useState('');
  
  document.addEventListener(EventListenerKeys.sendDataToReact, (e) => {
    setAngularInputValue((e as CustomEvent).detail);
  }, { capture: true });

  return (
    <div style={{ display: "grid-template-columns: auto auto auto", border: '1px solid blue' }}>
      <h1>Header.tsx</h1>
      <div>
        {props.headerComponents.map((component, index) => {
          return <div key={index}>{component}</div>;
        })}
      </div>
      <div>
        <h3>Angular Input Value from event</h3>
        <p>{angularInputValue}</p>
      </div>
    </div>
  );
};
