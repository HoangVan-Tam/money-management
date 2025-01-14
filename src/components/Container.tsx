import React, { ReactNode } from "react";

interface ContainerProps {
  children?: ReactNode;
}
const Container = (props: ContainerProps) => {
  return <div className="mx-10 mt-5">{props.children}</div>;
};

export default Container;
