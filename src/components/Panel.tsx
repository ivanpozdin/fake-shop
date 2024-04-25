import { twMerge } from "tailwind-merge";
import React from "react";

interface PanelProps extends React.AllHTMLAttributes<HTMLDivElement> {
  children: JSX.Element[];
  className: string;
}

function Panel({ children, className, ...otherProps }: PanelProps) {
  const cssClasses = twMerge(
    className,
    "border rounded p-3 shadow bg-white w-full"
  );
  return (
    <div className={cssClasses} {...otherProps}>
      {children}
    </div>
  );
}

export default Panel;
