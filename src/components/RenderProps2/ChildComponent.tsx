import React from "react";

interface ChildComponentProps {
  data: string[];
}

const ChildComponent: React.FunctionComponent<ChildComponentProps> = ({ data }) => {
  return data.map((item, index) => <li key={index}>{item}</li>);
};

export default ChildComponent;
