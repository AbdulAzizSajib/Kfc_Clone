import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // This navigates to the previous valid page in history
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-6 uppercase bg-zinc-900">
      <h2 className="font-bold text-white text-7xl">404</h2>
      <h2 className="font-bold text-white text-7xl">Page not found</h2>
      <p className="font-bold text-white">
        The page you&apos;re looking for might have been moved, removed, under
        development or might never exist.
      </p>
      <div className="flex space-x-4">
        <button onClick={handleGoBack} className="text-xl btn">
          Go Back
        </button>
        {/* <Link to="/" state={{ from: location }} replace className="text-xl btn">
          Go Back Home
        </Link> */}
      </div>
    </div>
  );
};

export default NotFound;
