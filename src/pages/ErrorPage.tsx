import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError() as Error;

  return (
    <div
      id="error-page"
      className="flex flex-col items-center h-screen justify-center"
    >
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      {isRouteErrorResponse(error) && (
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      )}
    </div>
  );
}
