import React, { useState } from "react";

interface ParentComponentProps {
  render: (data: string[]) => React.ReactNode;
}

const ParentComponent: React.FunctionComponent<ParentComponentProps> = ({
  render,
}) => {
  const [data] = useState<string[]>(["DannielDev", "React", "TypeScript"]);

  return <ul>{render(data)}</ul>;
};

export default ParentComponent;
