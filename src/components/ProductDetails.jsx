import { Link, useLocation } from "react-router-dom";

const ProductDetails = () => {
    const { state } = useLocation();
    console.log(state);

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="container mx-auto py-8">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
                    Product Details
                </h1>

                {state && (
                    <div className="bg-white p-6 shadow-md rounded-lg max-w-2xl mx-auto hover:shadow-lg transition-shadow duration-100">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                            {state.title}
                        </h2>
                        <img
                            src={state.thumbnail}
                            alt={state.title}
                            className="w-full h-60 object-cover rounded-md mb-4"
                        />
                        <p className="text-gray-600 text-sm capitalize mb-2">
                            Category: {state.category}
                        </p>
                        <p className="text-gray-800 font-semibold text-lg">
                            Price: $ {state.price}
                        </p>
                        <div className="mt-4 text-center">
                            <Link to={`/`} className=" w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"> Go To Product </Link>

                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductDetails;
