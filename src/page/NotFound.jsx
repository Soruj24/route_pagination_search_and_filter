import { Link, useRouteError } from "react-router-dom";

const NotFound = () => {
    const error = useRouteError();
    console.log(error);

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            {error && (
                <div
                    id="error-page"
                    className="bg-white p-8 shadow-lg rounded-lg text-center max-w-md"
                >
                    <h1 className="text-4xl font-bold text-red-500 mb-4">Oops!</h1>
                    <p className="text-gray-700 mb-4">
                        Sorry, an unexpected error has occurred.
                    </p>
                    <p className="text-gray-600 italic">
                        {error.statusText || error.message}
                    </p>
                    <Link
                        to="/"
                        className="mt-6 inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
                    >
                        Go to Home
                    </Link>
                </div>
            )}
        </div>
    );
};

export default NotFound;
