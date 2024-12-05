import React from "react";

function withLoading<T extends object>(Component: React.ComponentType<T>) {
  return (props: T & { isLoading: boolean }) => {
    const { isLoading, ...rest } = props;
    return isLoading ? <div>Loading...</div> : <Component {...(rest as T)} />;
  };
}

type UserProps = {
  name: string;
};

const UserComponent: React.FC<UserProps> = ({ name }) => {
  return <p>Hola, {name} !</p>;
};

const UserWithLoading = withLoading(UserComponent);

export const ParentComponent = () => {
  return (
    <div>
      <UserWithLoading name="DannielDev" isLoading={false} />
      <UserWithLoading name="Danniel Navas" isLoading={true} />
    </div>
  );
};
