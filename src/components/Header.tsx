import { VscAccount } from "react-icons/vsc";
import { TiShoppingCart } from "react-icons/ti";
import { MdFavorite } from "react-icons/md";
import { Link } from "react-router-dom";
import ActiveLink from "./ActiveLink";

function Header() {
  const links = [
    {
      label: "Home",
      path: "/",
      className: "hidden sm:flex justify-center pb-2 self-start",
    },
    { label: "Shop", path: "/shop" },
    { label: <VscAccount className=" text-2xl" />, path: "/account" },
    { label: <MdFavorite className=" text-2xl" />, path: "/favorites" },
    { label: <TiShoppingCart className=" text-2xl" />, path: "/cart" },
  ];

  const renderedLinks = links.map((link) => (
    <ActiveLink
      key={link.path}
      to={link.path}
      className={
        (link?.className ?? "") || "mb-3 flex justify-center pb-2 self-start"
      }
      activeClassName="font-bold border-b-4 border-blue-500"
    >
      {link.label}
    </ActiveLink>
  ));
  return (
    <div className="flex gap-4 justify-end pt-5 p-10">
      <ActiveLink
        to={"/"}
        className="mb-3 mr-auto text-3xl"
        activeClassName="font-bold  pl-2"
      >
        UNREAL STORE
      </ActiveLink>
      {renderedLinks}
    </div>
  );
}

export default Header;
