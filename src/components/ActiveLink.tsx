import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import { Link, useLocation } from "react-router-dom";

interface ActiveLinkProps {
  to: string;
  children: JSX.Element | string;
  className: string;
  activeClassName: string;
}

function ActiveLink({
  to,
  children,
  className,
  activeClassName,
}: ActiveLinkProps) {
  const currentPath = useLocation().pathname;

  const cssClasses = twMerge(
    className,
    classNames("text-blue-500", currentPath === to && activeClassName)
  );

  return (
    <div className={cssClasses} onClick={() => window.scrollTo(0, 0)}>
      <Link to={to}>{children}</Link>
    </div>
  );
}
export default ActiveLink;
