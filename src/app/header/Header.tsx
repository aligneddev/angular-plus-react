import React, { ReactElement, ReactNode } from "react";
export type HeaderPropsForComponent = {
  headerComponents: ReactElement[];
};

export const Header: React.FC<HeaderPropsForComponent> = (
  props: HeaderPropsForComponent
) => {
  return (
    <div style={{ display: "grid-template-columns: auto auto", border: '1px solid blue' }}>
      <h1>Header.tsx</h1>
      <div>
        {props.headerComponents.map((component, index) => {
          return <div key={index}>{component}</div>;
        })}
      </div>
    </div>
  );
};
