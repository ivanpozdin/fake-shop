import classNames from "classnames";
import { twMerge } from "tailwind-merge";

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: JSX.Element | string;
  primary?: boolean;
  secondary?: boolean;
  success?: boolean;
  warning?: boolean;
  danger?: boolean;
  outline?: boolean;
  rounded?: boolean;
  className?: string;
}

export default function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  className,
  ...otherProps
}: ButtonProps) {
  const cssClasses = twMerge(
    className,
    classNames("flex items-center px-3 py-1.5 border", {
      "border-blue-600 bg-blue-500 text-white": primary,
      "border-gray-900 bg-gray-800 text-white": secondary,
      "border-green-600 bg-green-500 text-white": success,
      "border-yellow-500 bg-yellow-400 text-white": warning,
      "border-red-600 bg-red-500 text-white": danger,
      "rounded-full": rounded,
      "bg-white": outline,
      "text-blue-500": outline && primary,
      "text-gray-800": outline && secondary,
      "text-green-500": outline && success,
      "text-yellow-400": outline && warning,
      "text-red-500": outline && danger,
    })
  );

  return (
    <button className={cssClasses} {...otherProps}>
      {children}
    </button>
  );
}

interface ButtonCustomizationProps {
  primary?: boolean;
  secondary?: boolean;
  success?: boolean;
  warning?: boolean;
  danger?: boolean;
}

Button.propTypes = {
  checkOnlyOneTypeProvided: ({
    primary,
    secondary,
    success,
    warning,
    danger,
  }: ButtonCustomizationProps) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);
    if (count > 1) {
      return new Error(
        "Only one of primary, secondary, success, warning, danger can be true"
      );
    }
  },
};
