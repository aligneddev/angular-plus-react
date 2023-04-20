import React from "react";
export type HeaderPropsForComponent = {};

export const Header: React.FC<HeaderPropsForComponent> = (
  props: HeaderPropsForComponent
) => {
  return (
    <div style={{ display: "grid-template-columns: auto auto;" }}>
      <h1>Header.tsx</h1>
      <div></div>
    </div>
  );
};
