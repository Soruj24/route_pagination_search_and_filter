import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-lg font-semibold text-gray-600">Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-lg font-semibold text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">All Products</h1>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products &&
            products.length > 0 &&
            products.map((product) => (
              <div
                key={product.id}
                className="bg-white p-4 shadow-md rounded-lg hover:shadow-lg transition-shadow duration-200"
              >
                <h2 className="text-xl font-semibold text-gray-700">{product.title}</h2>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-40 object-cover rounded-md my-4"
                />
                <p className="text-gray-600 text-sm capitalize">{product.category}</p>
                <p className="text-gray-800 font-semibold mt-2">Price: $ {product.price}</p>
                <div className="mt-4 text-center">
                  <Link to={`/product/${product.id}`} state={product} className=" w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"> Add Product </Link>

                </div>
              </div>
            ))}
        </section>
      </div>
    </div>
  );
};

export default Product;
