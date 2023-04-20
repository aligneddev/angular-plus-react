import React, { ReactElement, ReactNode } from "react";
export type HeaderPropsForComponent = {
  headerComponents: ReactElement[];
};

export const Header: React.FC<HeaderPropsForComponent> = (
  props: HeaderPropsForComponent
) => {
  return (
    <div style={{ display: "grid-template-columns: auto auto" }}>
      <h1>Header.tsx</h1>
      <div>
        {props.headerComponents.map((component, index) => {
          return <div key={index}>{component}</div>;
        })}
      </div>
    </div>
  );
};
