import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error=useRouteError();
  return (
    <div id="error-page" className="text-center py-52">
      <h2 className="text-4xl font-bold text-red-500">Oops!</h2>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="text-xl font-semibold text-red-500">
        <i>{error.statusText || error.message}</i>
      </p>
      <button className="btn btn-outline mt-3">
             <Link to='/'>Go Back Home</Link>
      </button>
    </div>
  );
};

export default ErrorPage;
