import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import HomePage from "./pages/HomePage";
import AccountPage from "./pages/AccountPage";
import ShopPage from "./pages/ShopPage";
import CartPage from "./pages/CartPage";
import FavoritesPage from "./pages/FavoritesPage";
import ErrorPage from "./pages/ErrorPage";
import favicon from "./imgs/favicon.svg";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/account", element: <AccountPage /> },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/favorites",
        element: <FavoritesPage />,
      },
    ],
  },
]);

function changeFavicon(newFaviconUrl: string) {
  let existingLink: HTMLLinkElement | null =
    document.querySelector("link[rel~='icon']");
  if (!existingLink) {
    existingLink = document.createElement("link");
    document.head.appendChild(existingLink);
  }
  existingLink.href = newFaviconUrl;
}

changeFavicon(favicon);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
