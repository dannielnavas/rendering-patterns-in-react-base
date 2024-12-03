import React from "react";

type ChildComponentProps = {
  render: (name: string) => JSX.Element;
};

export const ChildComponent: React.FunctionComponent<ChildComponentProps> = ({
  render,
}) => {
  const name = "DannielDev";
  return <>{render(name)}</>;
};

export const ParentComponent = () => {
  return <ChildComponent render={(name) => <p>Hola {name}</p>} />;
};
