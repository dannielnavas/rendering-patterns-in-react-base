import React, { useState } from "react";

function useLoading(inicialLoading: boolean = false) {
  const [isLoading, setIsLoading] = useState(inicialLoading);
  return {
    isLoading,
    setIsLoading,
  };
}

type UserProps = {
  name: string;
};

const UserComponent: React.FC<UserProps> = ({ name }) => {
  const { isLoading, setIsLoading } = useLoading(false);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <p>Hello, {name}</p>
      <button onClick={() => setIsLoading(true)}>Load</button>
    </div>
  );
};

export const ParentComponent = () => {
  return <UserComponent name="DannielDev" />;
};
